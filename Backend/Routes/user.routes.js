import {signIn, signUp} from "../Controllers/user.controllers.js";


 export default function userRoutes(app){
     app.post("/auth/signUp",signUp)
     app.post("/auth/login",signIn)
}