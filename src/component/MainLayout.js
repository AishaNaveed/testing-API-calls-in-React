import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import FilmContainer from './FilmContainer';

const MainLayout = () => {

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
        <>
            <Header/>
            <FilmContainer Film={firstFilm}/>
        </>
    );
}

export default MainLayout;