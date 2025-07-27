import { useState } from "react";
import "./VideoUpload.css";
import { PiYoutubeLogo } from "react-icons/pi";
import { Link } from "react-router-dom";


function VideoUpload() {

    const [inputField, setInputField] = useState({ "title":"", "description":"", "videoLink":"", "thumbnail":"", "videoType":"" })
// fuction for handle input form
    const handleOnChangeInput = (event, name) => {
        setInputField({
            ...inputField, [name]: event.target.value
        })
    }
console.log(inputField)


    return (
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <PiYoutubeLogo color="red" size="54px" />
                    upload Video
                </div>
                {/* form section */}
                <div className="uploadForm">
                    <input
                        onChange={(e) => { handleOnChangeInput(e,"title")}}
                    value={inputField.title}
                        type="text"
                        placeholder="Video or Title"
                        className="uploadFormInputs"
                    />
                    <input
                        onChange={(e) => { handleOnChangeInput(e,"description") }}
                    value={inputField.description}
                        type="text"
                        placeholder="Description"
                        className="uploadFormInputs"
                    /> 
                    <input
                        onChange={(e) => { handleOnChangeInput(e,"videoType") }}
                    value={inputField.videoType}
                    type="text"
                    placeholder="Category"
                    className="uploadFormInputs"
                />
                {/* thhumbnail pic */}
                <div>
                        thumbnai <input type='file' accept="image/*" />
                </div>
                {/* uuload video input */}
                 <div>
                    Video <input type='file' accept="video/mp4,video/webm,video/" />
                </div>
                </div>
{/* upload btn */}
                <div className="uploadBtns">
                    <div className="uploadBtn-form">Upload</div>
                    <Link to={"/"} className="uploadBtn-form">Home</Link>

                </div>


            </div>
        </div>
    );
}

export default VideoUpload;
