import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const useGif = (tag) => {
  
    const [loading,setLoading] = useState(false)
    const [gif, setGifs] = useState('')

    async function generateGif(tag){
        try{
          setLoading(true)
          const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url)
          const imgSrc = data.data.images.downsized_large.url
          setGifs(imgSrc)
          
        }
        catch(err){
          console.log("error occured",err)
        }
        setLoading(false)  
      }
      
      useEffect(()=>{
        generateGif(tag)
      },[])

      return {gif,loading,generateGif}
}

export default useGif;
