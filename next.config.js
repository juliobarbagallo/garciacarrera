/** @type {import('next').NextConfig} */
// const nextConfig = {
//     /* config options here */
//     output: 'standalone',
//   }

//   module.exports = nextConfig

module.exports = {
  env: {
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    SERVICE_ID: process.env.SERVICE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};