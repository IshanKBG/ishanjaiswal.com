/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./server.ts",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_meta: true
  }
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "functions/[[path]].js",
  // publicPath: "/build/",
};
