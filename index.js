import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5080;

app.use(cors()); //Behövs ej?
app.use(bodyParser.json()); // För att kunna skicka JSON-data i POST-request, behövs ej?
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "server", "views")); // Varför är det så här?

import apiRoutes from "./src/server/routes/api.js";
import pageRoutes from "./src/server/routes/pages.js";

app.use("/api", apiRoutes);
app.use("/", pageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
