// PM2 ecosystem config — must be .cjs because backend/package.json sets "type": "module"
module.exports = {
  apps: [
    {
      name:         "example-app-backend",
      script:       "./backend/index.js",
      cwd:          "/var/www/example-app",
      instances:    1,
      exec_mode:    "fork",
      watch:        false,
      env: {
        NODE_ENV:         "production",
        PORT:             "3001",
        FRONTEND_ORIGIN:  "https://demo.being-karan.in",
      },
    },
  ],
};
