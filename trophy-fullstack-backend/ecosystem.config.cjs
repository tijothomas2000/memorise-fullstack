module.exports = {
  apps: [
    {
      name: "profile-backend",
      script: "src/index.js",
      interpreter: "node",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 4060,
      },
    },
    {
      name: "thumb-worker",
      script: "src/worker/thumbWorker.js",
      interpreter: "node",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
