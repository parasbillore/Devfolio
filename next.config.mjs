/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    basePath: isProd ? '/Devfolio' : '',
    assetPrefix: isProd ? '/Devfolio/' : '',
    publicRuntimeConfig: {
      basePath: isProd ? '/Devfolio' : '',
    }
};

export default nextConfig;
