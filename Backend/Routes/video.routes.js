import { getAllVideo, getAllVideosByUserId, getVideoById, uploadVideo } from "../Controllers/video.controllers.js";
import auth from "../middleweware/authentication.js";

export default async function videoRoutes(app) {
    app.post("/video/video",auth,uploadVideo);
    app.get("/video/allvideos",getAllVideo);
    app.get("/video/getVideoById/:id",getVideoById);
    app.get("/video/:userId/channel",getAllVideosByUserId)
}