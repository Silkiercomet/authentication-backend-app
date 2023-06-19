import express from "express";
import session from "express-session";
import mongoose,  { ConnectOptions } from "mongoose";
import authRoutes from "./routes/authRoutes"
import dotenv from "dotenv"
import cors from "cors"
import extractStringEnvVar from "./controllers/extractEnv";
const app = express()

app.use(cors())
dotenv.config({ path: "./config.env" });


// Connect to MongoDB
mongoose
.connect(extractStringEnvVar("KEY_URL"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)

// middleware
app.use(express.json())
app.use(session({
    secret:extractStringEnvVar("JWT"),
    resave:false,
    saveUninitialized:false
}))

// Routes
app.use("/auth", authRoutes)

// start the server
app.listen(3001, () => {
    console.log(`serber is listening on port ${extractStringEnvVar("SERVER")}`)
})