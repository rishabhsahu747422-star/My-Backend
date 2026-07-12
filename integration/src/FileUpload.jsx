import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  let handleSubmit = async () => {
    let formData = new FormData();
    formData.append("image", file);
    console.log(formData);

    try {
      let res = await axios.post("http://localhost:3000/api/post", formData);
      console.log(res);
    } catch (error) {
      console.log("error from file Handeling", error);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        type="file"
        name="image"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FileUpload;
