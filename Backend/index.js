import express from 'express'
const app = express();
import mongoose from 'mongoose'
import userRoutes from './Routes/user.routes.js';
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

//routes
userRoutes(app)









let port=8000
app.listen(port,()=>(console.log(`backed started at ${port}`)
))