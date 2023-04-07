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
      {
        source: "/users/register",
        destination: "http://localhost:5001/users/register",
      },
      {
        source: "/users/login",
        destination: "http://localhost:5001/users/login",
      },
    ];
  };
  return {
    rewrites,
  };
};