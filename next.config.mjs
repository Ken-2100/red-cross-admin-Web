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
};

export default nextConfig;
