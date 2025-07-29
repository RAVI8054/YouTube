import { useEffect, useState } from "react";
import "./VideoUpload.css";
import { PiYoutubeLogo } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


function VideoUpload() {
    const navigate=useNavigate()

    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })
    // fuction for handle input form
    const handleOnChangeInput = (event, name) => {
        setInputField({
            ...inputField, [name]: event.target.value
        })
    }
    // console.log(inputField)
    const uploadImage = async (e, type) => {
        const files = e.target.files;
        // console.log(files)
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "youtube-clone");
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dlgorbunu/${type}/upload`,
                data
            );
            // console.log(response)
            const url = response.data.url;
            // console.log(url)
            let val = type === "image" ? "thumbnail" : "videoLink"
            setInputField({
                ...inputField, [val]: url
            })
        } catch (error) {
            console.log(error);
        }
    };
    console.log(inputField)

useEffect(()=>{
    let isLogin=localStorage.getItem("userId");
    if(isLogin!==null){
navigate('/')
    }
},[])

// for handle video submit 
const handleSubmitFunc=async()=>{
    await axios.post('http://localhost:8000/video/video',inputField,{withCredentials:true
    }).then((resp)=>{
        console.log(resp);       
    }).catch(err=>{
        console.log(err)
    })
}
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
                        onChange={(e) => { handleOnChangeInput(e, "title") }}
                        value={inputField.title}
                        type="text"
                        placeholder="Video or Title"
                        className="uploadFormInputs"
                    />
                    <input
                        onChange={(e) => { handleOnChangeInput(e, "description") }}
                        value={inputField.description}
                        type="text"
                        placeholder="Description"
                        className="uploadFormInputs"
                    />
                    <input
                        onChange={(e) => { handleOnChangeInput(e, "videoType") }}
                        value={inputField.videoType}
                        type="text"
                        placeholder="Category"
                        className="uploadFormInputs"
                    />
                    {/* thumbnail pic */}
                    <div>
                        thumbnail <input type='file' accept="image/*" onChange={(e) => uploadImage(e, "image")} />
                    </div>
                    {/* uuload video input */}
                    <div>
                        Video <input type='file' accept="video/mp4,video/webm,video/" onChange={(e) => uploadImage(e, "video")} />
                    </div>
                </div>
                {/* upload btn */}

                <div className="uploadBtns">
                    <div className="uploadBtn-form" onClick={handleSubmitFunc}>Upload</div>
                    <Link to={"/"} className="uploadBtn-form">Home</Link>

                </div>


            </div>
        </div>
    );
}

export default VideoUpload;
