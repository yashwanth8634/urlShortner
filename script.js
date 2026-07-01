import app from './src/app.js'
import connectToDb from './config/db.js'
import { configDotenv } from "dotenv";

configDotenv();

connectToDb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

