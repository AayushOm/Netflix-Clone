import axios from "axios";

const instance=axios.create({
    baseurl:"https://api.themoviedb.org/3",
});

export default axios;

//https://api.themoviedb.org/3/trending/all/week?api_key=d55fcd33c25e980442ba118a8dd9a3c7&language=en-US