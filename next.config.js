/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

module.exports = withVideos({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(webm)$/, // Update the regex to match .webm files
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/", // Adjust the publicPath
          outputPath: "static/videos/", // Adjust the outputPath
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
  publicRuntimeConfig: {
    // This will allow you to reference assets in your code
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  },
});
