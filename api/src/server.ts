import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

// Loads our enviroment variable
dotenv.config();

// Connects to the database via the URI
const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : 8000;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "UserDB",
};

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URI as string, options)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT} `);
    });
  })
  .catch((err: Error) => {
    console.log(
      "MongoDB connection error! Please make sure the database is running."
    );
    process.exit(1); // Closes the database
  });
