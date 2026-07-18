/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Two dev servers sharing one .next corrupt each other's cache — let each set its own dir.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    // next/image optimizer is unavailable with static export — serve as-is.
    unoptimized: true,
  },
  // Emit /treatments/ instead of /treatments.html so static hosts resolve routes cleanly.
  trailingSlash: true,
};

export default nextConfig;
