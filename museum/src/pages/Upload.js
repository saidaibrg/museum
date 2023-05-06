import React, { useState } from "react";

function Upload(){
    const [file, setFile]=useState("");

    const handleChange=(event)=> {
        setFile(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div>
            <h2> Upload Image: </h2>
            <input type="file" onChange={handleChange} />
            {file && <img src={file} />}
        </div>
    );
}

export default Upload; 

