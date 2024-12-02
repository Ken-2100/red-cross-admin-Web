import { WebSocketServer } from "ws";
import prisma from "@/libs/prismaDB";

// Singleton WebSocket server instance
let wss;

export default function handler(req, res) {
  if (!wss) {
    wss = new WebSocketServer({ noServer: true });

    wss.on("connection", (socket) => {
      console.log("Client connected");

      // Optionally handle messages from clients
      socket.on("message", (message) => {
        console.log("Received message:", message);
      });

      // Notify the client when they connect
      socket.send(
        JSON.stringify({
          type: "welcome",
          message: "Connected to WebSocket server!",
        })
      );

      // Cleanup on disconnect
      socket.on("close", () => {
        console.log("Client disconnected");
      });
    });
  }

  // Upgrade HTTP to WebSocket
  if (req.method === "GET") {
    if (req.socket.server.wss === undefined) {
      req.socket.server.on("upgrade", (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, (ws) => {
          wss.emit("connection", ws, request);
        });
      });
      req.socket.server.wss = wss;
    }
    res.status(200).end();
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Notify clients when data is updated
export async function notifyClients() {
  if (wss) {
    const user = await prisma.userInfo.findMany({
      where: { userType: "user" },
    });

    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        // Open WebSocket connection
        client.send(JSON.stringify({ type: "update", data: user }));
      }
    });
  }
}
