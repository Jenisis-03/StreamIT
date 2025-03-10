const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.unsplash.com"], // Add domains here
  },
  eslint: {
    ignoreDuringBuilds: true, // Bypass ESLint checks
  },
  typescript: {
    ignoreBuildErrors: true, // Bypass TypeScript checks
  },
};

export default nextConfig;