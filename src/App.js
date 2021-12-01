import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [filmCollection, setFilmCollection] = useState([]);
  const [firstFilm, setFirstFilm] = useState({});

  const getFilmCollection = async () => {
    const apiResponse = await axios.get(`https://ghibliapi.herokuapp.com/films`);
    setFilmCollection(apiResponse.data);
  };

  useEffect(() => {
    getFilmCollection();
    setFirstFilm(filmCollection[0]);
  }, [filmCollection]);

  return (
    <div className="App">
      <header>
        <h1>Studio Ghibli</h1>
      </header>
        <p>{firstFilm?.title}</p>
        <img src={firstFilm?.image} alt={firstFilm?.title} />
        <p>{firstFilm?.description}</p>
    </div>
  );
}

export default App;
