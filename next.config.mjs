/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable webpack5 features that might be causing issues
  webpack: (config) => {
    // Avoid using certain modules that might be causing issues
    config.resolve.alias = {
      ...config.resolve.alias,
      // Prevent problematic imports
      'three': false,
      '@react-three/fiber': false,
      '@react-three/drei': false,
    }
    return config
  },
}

export default nextConfig
