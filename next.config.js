/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*", // Apply to all API routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://red-cross-admin-web-en41.vercel.app/", // Replace with your frontend URL
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS", // Allowed HTTP methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization", // Allowed headers
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true", // Allow cookies if needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
