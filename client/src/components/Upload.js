


import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const FileUpload = () => {
  const [file, setFile] = useState("");
 

  const navigate = useNavigate();

  const handleUpload= async (e) => {
     e.preventDefault();
    
    const formData = new FormData();
    formData.append('dataFile', file, file.name);
    console.log("formData",formData)
    
    try {
      await AuthService.upload(formData).then(
        () => {
          navigate("/home");
          console.log("auth1")
           window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div id="upload-box">
       <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
      </form>
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      {file && <ImageThumb image={file} />}
    </div>
  );
}
const ImageThumb = ({ image }) => {
    
  return <img src={URL.createObjectURL(image)} alt={image.name}  style={{ width:300 }}/>;
};


export default function Upload() {
  return <FileUpload />;
}

























