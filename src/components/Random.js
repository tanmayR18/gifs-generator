import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`



const Random = () => {

  const {gif, loading, generateGif} = useGif()
  // const [loading,setLoading] = useState(false)
  // const [gif, setGifs] = useState('')

  // async function generateGif(){
  //   try{
  //     setLoading(true)
  //     const {data} = await axios.get(url)
  //     const imgSrc = data.data.images.downsized_large.url
  //     setGifs(imgSrc)

  //   }
  //   catch(err){
  //     console.log("error occured",err)
  //   }
  //   setLoading(false)
  // }
  
  // useEffect(()=>{
  //   generateGif()
  // },[])

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
      flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>
        A Random Gif
      </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt='GIF....' className='rounded-lg'/>)
      }

      <button onClick={() => generateGif()}
      className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]">
        Generate
      </button>
      
    </div>
  )
}

export default Random;