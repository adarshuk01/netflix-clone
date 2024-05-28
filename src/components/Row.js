
import React, { useEffect, useState } from 'react'; 
import instance from '../Instance';

function Row({isposter, fetchUrl, title }) { 
  const [data, setData] = useState([]);

  const fetchTrending = async () => { 
    try { 
      const response = await instance.get(fetchUrl); 
      setData(response.data.results); 
    } catch (error) { 
      console.log(error); 
    } 
  };

  useEffect(() => { 
    fetchTrending(); 
  }, [fetchUrl]);

  console.log(data); 

  return ( 
    <div className={`row`}>
      <h2>{title}</h2>
      <div className="row__posters">
        {data.map(item => (
          <div key={item.id} className={`row__poster ${isposter ? 'movieposter' : ''}`}>
            <img 
  src={`https://image.tmdb.org/t/p/w500${isposter ?item.backdrop_path: item.poster_path }`} 
  alt={item.title || item.name} 
  height={250} 
/>

          </div>
        ))}
      </div>
    </div>
  ); 
}

export default Row;

