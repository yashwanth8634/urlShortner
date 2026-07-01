import { configDotenv } from "dotenv";
configDotenv();
import connectToDb from './config/db.js'
await connectToDb();

import app from './src/app.js'




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

