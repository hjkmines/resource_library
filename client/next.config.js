/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/media",
        destination: "http://localhost:5001/media",
      },
    ];
  };
  return {
    rewrites,
  };
};