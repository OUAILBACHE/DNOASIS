/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',            // generate static /out folder
  basePath: '/DNOASIS',        // repo name (case-sensitive!)
  assetPrefix: '/DNOASIS/',    // ensures assets load correctly
};
export default nextConfig;

