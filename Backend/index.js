import express from 'express'
const app = express();
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose'
import userRoutes from './Routes/user.routes.js';
import videoRoutes from './Routes/video.routes.js';
import commentRoutes from './Routes/comment.routes.js';
// for mongoose connection with db

mongoose.connect('mongodb+srv://ravimrvr:EVuFT85SmywxcBnh@youtube.lksyi2l.mongodb.net/'
).then(() => {
        console.log("DB CONNECTED");
    })
    .catch((err) => {
        console.log("DB NOT CONNECTED", err.message);
    });

//controllers
 app.use(express.json())
app.use(cookieParser());


//routes
userRoutes(app)
videoRoutes(app)
commentRoutes(app)


let port=8000
app.listen(port,()=>(console.log(`backed started at ${port}`)
))