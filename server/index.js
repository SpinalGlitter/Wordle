import express from "express";
import path from "path";
import cors from "cors";


const app = express();
const PORT = 5080;

app.use(cors()); 
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "server", "views")); 

import apiRoutes from "./routes/api.js";
import pageRoutes from "./routes/pages.js";

app.use("/api", apiRoutes);
app.use("/", pageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
