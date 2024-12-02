"use client";
import { createContext, useState, useEffect } from "react";

export const SearchArrayDataProvider = createContext(null);

const SearchArrayProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchDataArchives, setSearchDataArchives] = useState("");
  const [rootFlag, setRootFlag] = useState("");
  console.log("outside flag", rootFlag);
  // Fetch users when the component mounts
  useEffect(() => {
    const ws = new WebSocket$(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`
    );

    ws.onopen = () => {
      console.log("WebSocket connected");
      setStatus("Connected");
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Received message:", message);

      if (message.type === "update") {
        setUsers(message.data);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      setStatus("Disconnected");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);
  // Filter users based on the current data
  const notAdminUsers = users.filter(
    (val) => val.userType !== "admin" && val.certificatedApproved === false
  );

  const graudatedUsers = users.filter(
    (val) => val.certificatedApproved === true
  );

  const finalUsers = notAdminUsers.filter((val) => {
    const lowercaseSearch = searchData.toLowerCase();
    return Object.values(val).some(
      (field) =>
        typeof field === "string" &&
        field.toLowerCase().includes(lowercaseSearch)
    );
  });

  const archivedUsers = graudatedUsers.filter((val) => {
    const lowercaseSearch = searchDataArchives.toLowerCase();
    return Object.values(val).some(
      (field) =>
        typeof field === "string" &&
        field.toLowerCase().includes(lowercaseSearch)
    );
  });

  return (
    <SearchArrayDataProvider.Provider
      value={{
        finalUsers,
        searchData,
        setSearchData,
        archivedUsers,
        searchDataArchives,
        setSearchDataArchives,
        setRootFlag,
      }}
    >
      {children}
    </SearchArrayDataProvider.Provider>
  );
};

export default SearchArrayProvider;
