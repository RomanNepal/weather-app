/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.weatherapi.com",
    //     pathname: "weather",
    //   },
    // ],
  },
};

module.exports = nextConfig;
