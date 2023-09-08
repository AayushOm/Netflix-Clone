import React,{useState,useEffect} from 'react'
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const baseurl="https://image.tmdb.org/t/p/original/"

function Row({title,fetchURL,isLargeRow}) {
    const [movies,setMovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState("")

    useEffect(()=>{
        const fetchData=async()=>{
            const data=await fetch(fetchURL);
            const newData=await data.json()
            setMovies(newData.results)
        }
        fetchData()
    },[fetchURL])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleClick=(movie)=>{
      if(trailerUrl)
      {
        setTrailerUrl("");
      }
      else{
        movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          // url- complete url of youtube
          // new URL(url).search- Gives the string after question mark in url provided
          // URLSearchParams- Gives us dictionary of d[v]=key
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };


  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie=>(<img 
        key={movie.id}
        onClick={()=>handleClick(movie)}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        src={`${baseurl}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
        alt={movie.name}/>))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    
    </div>
  )
}

export default Row
