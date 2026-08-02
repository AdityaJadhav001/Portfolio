import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> plain files in ./out, synced to S3 and served by CloudFront.
  output: "export",
  // Directory-style URLs so CloudFront can resolve /work/ -> /work/index.html.
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
