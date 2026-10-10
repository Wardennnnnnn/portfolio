import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // The portfolio is also previewed through this LAN address.
  allowedDevOrigins: ['192.168.1.225'],
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // The compiler API avoids the CLI subprocess capture issue in this environment.
  experimental: { useTypeScriptCli: false },
};

export default nextConfig;
