import express from "express";

import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import videoRoutes from './routes/video.Route.js'
import channelRoutes from './routes/channel.Route.js'
import cors from "cors"
import commentRouter from "./routes/comments.Route.js";
import userRouter from './routes/users.Route.js'

// for mongoose connection with db
mongoose.connect('mongodb+srv://ravimrvr:EVuFT85SmywxcBnh@youtube.lksyi2l.mongodb.net/'
).then(() => {
    console.log("DB CONNECTED");
})
    .catch((err) => {
        console.log("DB NOT CONNECTED", err.message);
        process.exit(1); // Exit process if DB connection fails
    });
mongoose.set('strictQuery', false);

const app = express();
app.use(cors({
    origin: ["http://localhost:5173",
        "https://you-tube-beta-five.vercel.app"],
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());


videoRoutes(app)
commentRouter(app);
userRouter(app);
channelRoutes(app)

let port = 8080
app.listen(port, () => (console.log(`backed started at ${port}`)
))