import { useEffect , useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css'


const MovieDetails = () => {

    const navigate = useNavigate()

    const [data, setData] = useState()
    const { id } = useParams()

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
        .then(res => res.json())
        .then(res => setData(res))
    },[])

    if(data){console.log(data)}
    const POSTER_PATH = 'https://image.tmdb.org/t/p/original'

    return(
        <div className={`${styles.text} flex flex-col items-center text-center w-72 mx-auto my-5`}>
            <p className='my-2 text-xl'> {data?.title} </p>
            <img src={`${POSTER_PATH}${data?.poster_path}`}
                 alt="Poster presenting the movie"
                 className='w-full h-auto my-2'/>
            <p className='my-2'> Original language: {data?.original_language.toUpperCase()} </p>
            {data?.spoken_languages.map(element => {<p>{element.english_name}</p>})}
            <p className='w-full mx-auto'> Overview: {data?.overview} </p>
            <p className='text-lg'>Vote: {data?.vote_average} out of 10</p>
            <p>Votes: {data?.vote_count}</p>
            <button onClick={() => { navigate(-1) }}>Go back</button>
        </div>
    )
}

export default MovieDetails