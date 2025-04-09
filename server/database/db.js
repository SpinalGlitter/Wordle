import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Error to connect to Mongodb:", error);
  }
}

const db = client.db("wordle");
const highscores = db.collection("highscores");

export { connectDB, highscores };
