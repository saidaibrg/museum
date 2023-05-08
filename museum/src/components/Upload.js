import React, { useState } from "react";
import { images } from "../../next.config";

function Upload(){
    const [imageSrc, setImageSrc]=useState();
    const [uploadData, setUploadData]=useState();

    function handleChange(event){
        const reader=new FileReader();
        reader.onload=function(onLoadEvent){
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    async function handleSubmit(event){
        event.preventDefault();
        const form=event.currentTarget;
        const fileInput=Array.from(form.elements).find(({name})=>name === 'file');
        const formData=new FormData();
        for (const file of fileInput.files){
             formData.append('file', file);
        }
        formData.append('upload_preset', 'my-uploads');     
    }

    return (
        <div class="mt-20">
            <h2> Upload Image: </h2>
            <form className="form" method="post" onChange={handleChange} onSubmit={handleSubmit}>
                <input class="w-full text-sm text-gray-900 border border-gray-300  cursor-pointer focus:outline-none ml-10" type="file" name="file"/>
            <img src={imageSrc} />

            {imageSrc && !uploadData && (
                <button>Upload Files</button>
            )}

            {uploadData && (
                <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
            )}
            </form>
        </div>
    );
}

export default Upload; 