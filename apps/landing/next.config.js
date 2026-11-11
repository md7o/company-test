/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/tokens", "@repo/contracts"],
};

export default nextConfig;
