import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TASTY_API_KEY: process.env.TASTY_API_KEY,
  },
};

export default nextConfig;