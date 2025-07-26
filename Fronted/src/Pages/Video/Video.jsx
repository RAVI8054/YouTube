import "./Video.css";
import { BiLike } from "react-icons/bi"; 
import { BiDislike } from "react-icons/bi";
import Avatar from "react-avatar";


function Video() {
  return (
    <div className="video">
      {/* 1.div for video screen */}
      <div className="videoPostSection">
        {/* div for video containg */}
        <div className="video_youtube">
          <video width="400" controls autoPlay className="video_youtube_video">
            <source
              src={"https://www.youtube.com/watch?v=FudfVyYWNxQ"}
              type="video/mp4"
            />
          </video>
          {/* video description section */}
          <div className="video_youtubeAbout">
            {/* 1.for video title */}
            <div className="video_uTubeTitle">{"java script classes"}</div>

            {/* video description image+subscribe+title +chanal */}
            <div className="youtube_video_profileBlock">
              <div className="youtube_video_profileBlock_left">
                {/* video description chanal image */}
                <div className="youtube_video_ProfileBlock_left_img">
                  <Avatar
                    className="cursor-pointer youtube_video_ProfileBlock_left_image "
                    src="data:image/png;base64,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"
                    size={28}
                    round={true}
                  />
                </div>
                <div className="youtubeVideo_subsView">
                {/* video title */}
                        <div className="youtubePostProfileName">{"user1"}</div>
                        {/* chanal name */}
                        <div className="youtubePostProfileSubs">chanal name</div>
                </div>
                {/* subscribe button */}
                              <div className="subscribeBtnYoutube">Subscribe</div>
              </div>
                          {/* right part description like +dislike buttom */}
                          <div className="youtube_video_likeBlock">
                          {/* like button  */}
                              <div className="youtube_video_likeBlock_Like">
                                  <BiLike  size={"25px"} />
                                  <div className="youtube_video_likeBlock_NoOfLikes">100</div>
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
                    <div>2 year ago</div>
                    <div>its very intersting story</div>
                  </div>
 {/* video comment section */}
                  <div className="youtubeCommentSection">
                      <div className="youtubeCommentSectionTitle">4 commets</div>
                  </div>


        </div>
      </div>
{/* ------------------------------------------------------------ */}
      {/* main-2 div. vide sugestion sidebar start */}
      <div className="videoSuggestion">video</div>
    </div>
  );
}

export default Video;
