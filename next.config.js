// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Optional: can also remove the header entirely
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *", // Allows embedding from any domain
          },
        ],
      },
    ];
  },
};
