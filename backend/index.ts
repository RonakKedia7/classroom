import { createServer } from "http";
import app from "./src/app";

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});
