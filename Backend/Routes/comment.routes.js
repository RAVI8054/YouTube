import { addComment, getCommentByVideoId } from "../Controllers/comment.controllers.js";
import auth from "../middleweware/authentication.js";

export default function commentRoutes(app) {
    app.post("/comment", auth, addComment)
    app.get('/comment/:videoId',getCommentByVideoId)
}