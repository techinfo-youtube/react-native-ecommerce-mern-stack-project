import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
//routes imports
import testRoutes from "./routes/testRoutes.js";
import connectDB from "./config/db.js";
// dot env config
dotenv.config();

//database connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//route
app.use("/api/v1", testRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome To Node server </h1>");
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${process.env.PORT}`.bgMagenta.white);
});
