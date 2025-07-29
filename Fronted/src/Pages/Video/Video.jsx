import "./Video.css";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Avatar from "react-avatar";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Video() {
    const { id } = useParams()
    //  console.log( "video id ",id);
    // state handle for commets
    const [comments, setComments] = useState([]);

    //send id from fornted and than get video and video detials
    let [data, setData] = useState(null)
    // state handle for video url
    const [videoUrl, setVideoURL] = useState("")
    // fuction for fetch video 
    async function fetchVedioById() {
        await axios.get(`http://localhost:8000/video/getVideoById/${id}`)
            .then((response) => {
                // console.log(response);
                setData(response?.data.videos)
                // console.log(response?.data.videos);

                setVideoURL(response?.data?.videos?.videoLink)

            }).catch(err => { console.log(err) })
    }
    // function for get all comments
    async function getCommentByVideoId() {

        await axios.get(`http://localhost:8000/comment/${id}`).then((response) => {
            setComments(response.data.comments)
        }).catch(err => { console.log(err) })
    }


    useEffect(() => {
        fetchVedioById();
        getCommentByVideoId()
    }, [])

    // state handle for commets
    const [message, setMessage] = useState("")
    // console.log(message)


    return (
        <div className="video">
            {/* 1.div for video screen */}
            <div className="videoPostSection">
                {/* div for video containg */}
                <div className="video_youtube">
                    {data && <video width="390" controls autoPlay className="video_youtube_video">
                        <source
                            src={videoUrl}
                            type="video/mp4"
                        />
                    </video>}

                    {/* video description section */}
                    <div className="video_youtubeAbout">
                        {/* 1.for video title */}
                        <div className="video_uTubeTitle">{data?.title}</div>

                        {/* video description image+subscribe+title +chanal */}
                        <div className="youtube_video_profileBlock">
                            <div className="youtube_video_profileBlock_left">
                                {/* video description chanal image */}
                                <Link to={`/user/${data?.user?._id}`} className="youtube_video_ProfileBlock_left_img">
                                    <Avatar
                                        className="cursor-pointer youtube_video_ProfileBlock_left_image "
                                        src={data?.user?.profilePic}
                                        size={28}
                                        round={true}
                                    />
                                </Link>
                                <div className="youtubeVideo_subsView">
                                    {/* video title */}
                                    <div className="youtubePostProfileName">{data?.user?.channelName}</div>
                                    {/* chanal name */}
                                    <div className="youtubePostProfileSubs">{data?.user?.createdAt.slice(0, 10)}</div>
                                </div>
                                {/* subscribe button */}
                                <div className="subscribeBtnYoutube">Subscribe</div>
                            </div>
                            {/* right part description like +dislike buttom */}
                            <div className="youtube_video_likeBlock">
                                {/* like button  */}
                                <div className="youtube_video_likeBlock_Like">
                                    <BiLike size={"25px"} />
                                    <div className="youtube_video_likeBlock_NoOfLikes">{data?.like}</div>
                                </div>
                                <div className="youtubeVideoDivider"></div>
                                <div className="youtube_video_likeBlock_Like">
                                    <div className="youtube_video_likeBlock_NoOfLikes">10</div>
                                    <BiDislike size={"25px"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* video description part */}
                    <div className="youtube_video_About">
                        <div>{data?.createdAt.slice(0, 10)}</div>
                        <div>{data?.description}</div>
                    </div>
                    {/* video comment section */}
                    <div className="youtubeCommentSection">
                        <div className="youtubeCommentSectionTitle">4 commets</div>
                    </div>
                    <div className="youtubeSelfComment">
                        <Avatar
                            className="cursor-pointer video_youtubeSelfCommentProfile "
                            src="https://plus.unsplash.com/premium_photo-1752768205947-5ae983e513ef?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            size={28}
                            round={true}
                        />
                        <div className="addAComment">
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                type="text"
                                className="addAcommentInput"
                                placeholder="Add a comment"
                            />
                            {/* button cancel or commit */}
                            <div className="cancelSubmitComment">
                                <div className="cancelComment">cancel</div>
                                <div className="cancelComment">commit</div>
                            </div>
                        </div>
                    </div>

                    {/* commit History section */}
                    <div className="youtubeOthersComments">
                        {/* comment1 */}
                        {
                            comments.map((item, index) => {
                                return (
                                    <div className="youtubeSelfComment">
                                        <Avatar
                                            className="cursor-pointer video_youtubeSelfCommentProfile "
                                            src={item?.user?.profilePic}
                                            size={28}
                                            round={true}
                                        />

                                        <div className="others_commentSection">
                                            <div className="others_commentSectionHeader">
                                                <div className="channelName_comment">{item?.user?.channelName}</div>
                                                <div className="commentTimingOthers">{item?.createdAt.slice(0,10)}</div>
                                            </div>
                                            <div className="otherCommentSectionComment">
                                                {item?.message}
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------ */}
            {/* main-2 div. vide sugestion sidebar start */}
            <div className="videoSuggestion">
                {/* video 1 */}
                <div className="videoSuggestionsBlock">
                    {/* sugection video */}
                    <div className="video_suggetion_thumbnail">
                        <img
                            className="video_suggetion_thumbnail_img"
                            src="https://images.unsplash.com/photo-1753118202506-259f86ed3e40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    {/* suggection video description */}
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">
                            full-stack Yt clone where users can view  videos
                        </div>
                        <div className="video_suggetions_About_Profile">internshala</div>
                        <div className="video_suggetions_About_Profile">13k views .1 days ago</div>
                    </div>
                </div>
                {/* video2 */}
                <div className="videoSuggestionsBlock">
                    {/* sugection video */}
                    <div className="video_suggetion_thumbnail">
                        <img
                            className="video_suggetion_thumbnail_img"
                            src="https://images.unsplash.com/photo-1753118202506-259f86ed3e40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    {/* suggection video description */}
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">
                            full-stack Yt clone where users can view  videos
                        </div>
                        <div className="video_suggetions_About_Profile">internshala</div>
                        <div className="video_suggetions_About_Profile">13k views .1 days ago</div>
                    </div>
                </div>
                {/* video3 */}
                <div className="videoSuggestionsBlock">
                    {/* sugection video */}
                    <div className="video_suggetion_thumbnail">
                        <img
                            className="video_suggetion_thumbnail_img"
                            src="https://images.unsplash.com/photo-1753118202506-259f86ed3e40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    {/* suggection video description */}
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">
                            full-stack Yt clone where users can view  videos
                        </div>
                        <div className="video_suggetions_About_Profile">internshala</div>
                        <div className="video_suggetions_About_Profile">13k views .1 days ago</div>
                    </div>
                </div>
                {/* video4 */}
                <div className="videoSuggestionsBlock">
                    {/* sugection video */}
                    <div className="video_suggetion_thumbnail">
                        <img
                            className="video_suggetion_thumbnail_img"
                            src="https://images.unsplash.com/photo-1753118202506-259f86ed3e40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    {/* suggection video description */}
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">
                            full-stack Yt clone where users can view  videos
                        </div>
                        <div className="video_suggetions_About_Profile">internshala</div>
                        <div className="video_suggetions_About_Profile">13k views .1 days ago</div>
                    </div>
                </div>
                {/* video5 */}
                <div className="videoSuggestionsBlock">
                    {/* sugection video */}
                    <div className="video_suggetion_thumbnail">
                        <img
                            className="video_suggetion_thumbnail_img"
                            src="https://images.unsplash.com/photo-1753118202506-259f86ed3e40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    {/* suggection video description */}
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">
                            full-stack Yt clone where users can view  videos
                        </div>
                        <div className="video_suggetions_About_Profile">internshala</div>
                        <div className="video_suggetions_About_Profile">13k views .1 days ago</div>
                    </div>
                </div>
                {/* video6 */}
                <div className="videoSuggestionsBlock">
                    {/* sugection video */}
                    <div className="video_suggetion_thumbnail">
                        <img
                            className="video_suggetion_thumbnail_img"
                            src="https://images.unsplash.com/photo-1753118202506-259f86ed3e40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    {/* suggection video description */}
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">
                            full-stack Yt clone where users can view  videos
                        </div>
                        <div className="video_suggetions_About_Profile">internshala</div>
                        <div className="video_suggetions_About_Profile">13k views .1 days ago</div>
                    </div>
                </div>
                {/* video7 */}
                <div className="videoSuggestionsBlock">
                    {/* sugection video */}
                    <div className="video_suggetion_thumbnail">
                        <img
                            className="video_suggetion_thumbnail_img"
                            src="https://images.unsplash.com/photo-1753118202506-259f86ed3e40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    {/* suggection video description */}
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">
                            full-stack Yt clone where users can view  videos
                        </div>
                        <div className="video_suggetions_About_Profile">internshala</div>
                        <div className="video_suggetions_About_Profile">13k views .1 days ago</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
