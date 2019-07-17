import React, {useEffect,useState} from "react";
import axios from "axios"
import { directive } from "@babel/types";


function Article({limit}){
const[nasaData,setNasaData] = useState([])

useEffect(() => {
    axios.get(`https://api.nasa.gov/api.html#apod`)
    .then(res => {
        const space = res.data.message
        setNasaData(space)
    });
}, []);
   return(
    <div className="article">
        {nasaData.map(nasaUrl => {
            return <CardPhoto imgUrl={nasaUrl}/>
        })
    }
       
    </div>
   );
}

export default Article;