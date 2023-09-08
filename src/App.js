import './App.css';
import Row from "./components/Row"
import Banner from './components/Banner';
import requests from './request'
import Nav from './components/Nav';

function App() {
  return (
    <div className='container'>
      <Nav/>
      <Banner/>
      <Row title="Netflix Orignals" fetchURL={requests.fetchNetflixOrignals} isLargeRow/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
