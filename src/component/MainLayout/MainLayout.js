import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import FilmContainer from '../FilmContainer/FilmContainer';

const MainLayout = () => {

    const [filmCollection, setFilmCollection] = useState([]);
    const [firstFilm, setFirstFilm] = useState({});
    const [error, setError] = useState(null);

    const getFilmCollection = async () => {
        try {
            const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`)
            setFilmCollection(data);
            setError(null);
        }
        catch (err) {
            if (err.response.status === 418) {
                setError("418: I am a tea pot 🫖, silly");
            }
            else if (err.response.status === 500) {
                setError("Oops… something went wrong, try again");
            }
            else {
                setError(err.message)
            }
        }
    };

    useEffect(() => {
        getFilmCollection();
        setFirstFilm(filmCollection[0]);
    }, [filmCollection]);

    return (
        <>
            <Header />
            {error && <section>{error}</section>}
            {firstFilm && <FilmContainer film={firstFilm} />}
        </>
    );
}

export default MainLayout;