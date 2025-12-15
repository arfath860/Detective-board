import { useEffect, useState } from "react";

const New = () =>{

    const[image,setImage] = useState(null);

    useEffect(()=>{
        const savedImage = localStorage.getItem("savedImage");
        if(savedImage){
            setImage(savedImage);
        }
    },[]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            localStorage.setItem("savedImage", reader.result);
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };


    return(
        <>
        <form action="">
            <input type="file" accept="image/*" name="" id="" onChange={handleImageChange} />
        </form>

        {image && (
            <img src={image} alt="dont know" 
            style={{
                width:"100px",
                height:"100px",
                objectFit:"cover",
                border:"2px solid black"
            }} />
        )}
        </>
    )

}
export default New;