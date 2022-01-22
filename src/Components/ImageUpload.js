import { useState } from "react"

export default function ImageUpload() {
const [image, setImage] = useState("/22.jpg");

const imageHandler = (e)=>{
    const reader = new FileReader();
    reader.onload=()=>{
        if (reader.readyState===2) setImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
}
    return(<section className="App">
    We.Are.Radi
<div>
    <img src={image} alt=""></img>
    <input type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler}/>
   </div> </section>)
  
}
