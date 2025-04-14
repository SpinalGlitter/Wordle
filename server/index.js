import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

import { connectDB } from "./database/db.js";
import apiRoutes from "./routes/api.js";
import pageRoutes from "./routes/pages.js";

const app = express();
const PORT = 5080;

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

connectDB();

app.use("/static", express.static(path.join(rootDir, "public/dist")));
app.use(express.static(path.join(process.cwd(), "style")));

app.use("/api", apiRoutes);

app.use("/", pageRoutes);

app.get(/^\/(?!api|highscore).*/, (req, res) => {
  res.sendFile(path.join(rootDir, "public/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
