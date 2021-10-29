const { requestHeaders } = require("./src/config/headers");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: requestHeaders,
      },
    ];
  },
};
