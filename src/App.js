import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './Request';
import Header from './components/Header';
import Banner from './components/Banner';
import { useState,useEffect } from 'react';
function App() {
  
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
   
  }, []);

  
  return (
    <div >
      <div style={{position:'sticky', top:'0',bottom:'' ,backgroundColor: scrollPosition > 370 ? 'black' : 'transparent', zIndex:'1000',transition: 'background-color 0.3s ease'}}>
      <Header /></div>
      <Banner fetchUrl={requests.fetchTrending}/>
   <Row title='Netflix Originals' isposter={true} fetchUrl={requests.fetchNetflixOriginals} />
    <Row title='Trending'  fetchUrl={requests.fetchTrending} />
    <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
    <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
    <Row title='Comedy Movies' fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
