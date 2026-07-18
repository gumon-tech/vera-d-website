/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // next/image optimizer is unavailable with static export — serve as-is.
    unoptimized: true,
  },
  // Emit /treatments/ instead of /treatments.html so static hosts resolve routes cleanly.
  trailingSlash: true,
};

export default nextConfig;
