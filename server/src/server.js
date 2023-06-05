const app = require("./app");
const http = require("http");
const { loadPlanets } = require("./models/planets.model");
const { mongoConnect } = require("./services/mongo");
const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8002;
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanets();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`lisening on port ${PORT}`);
  });
}

startServer();
