const { spawnProcess } = require("./spawn-process");

(async () => {
  await spawnProcess("yarn", ["exec", "pprettier", "--write", `${__dirname}/../**/*.{ts,js,md,json}`]);
})();