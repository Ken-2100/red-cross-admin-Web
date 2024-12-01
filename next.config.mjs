/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone", // Enables standalone mode for optimized deployments
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "", // No port needed
        pathname: "/f/**", // Matches paths under /f/
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*", // Apply CORS headers to all API routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.NEXT_PUBLIC_API_BASE_URL, // Frontend URL
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS", // Supported HTTP methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization", // Supported headers
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true", // Required for cookie-based authentication
          },
        ],
      },
    ];
  },
};

export default nextConfig;
