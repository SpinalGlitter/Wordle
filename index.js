import express from "express";

const app = express();
const PORT = 3080;

import apiRoutes from "./src/server/routes/api.js";
import pageRoutes from "./src/server/routes/pages.js";

app.use("/api", apiRoutes);
app.use("/", pageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
