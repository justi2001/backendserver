import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRouter from "./src/routers/user"

dotenv.config()
const app = express();
app.use("/auth", userRouter)
const PORT = process.env.PORT || 3001

const dpURL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.rdjke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = async () => {
  try {
    await mongoose.connect(dpURL)
    console.log(`Connect to DB succesfully !!!!`);
  } catch (error) {
    console.log(`Can not connect to DB ${error}`);
  }
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is strating at http://localhost:${PORT}`);
  })
})
  .catch((error) => {
    console.log(error);
  })
