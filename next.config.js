/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const { parsed: myEnv } = require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};

//needed to add this to get the .env file to work
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
