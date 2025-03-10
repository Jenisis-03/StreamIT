const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.unsplash.com"], // Add domains here
  },
  eslint: {
    ignoreDuringBuilds: true, // This will bypass ESLint checks during build
  },
};

export default nextConfig;