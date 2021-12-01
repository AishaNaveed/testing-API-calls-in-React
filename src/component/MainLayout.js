import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import FilmContainer from './FilmContainer';

const MainLayout = () => {

    const [filmCollection, setFilmCollection] = useState([]);
    const [firstFilm, setFirstFilm] = useState({});
    const [error, setError] = useState(null);

    const getFilmCollection = async () => {
        await axios.get(`https://ghibliapi.herokuapp.com/films`)
            .then(response => {
                if (response.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return response.data;
            })
            .then(data => {
                setFilmCollection(data);
                setError(null);
            })
            .catch(err => {
                // auto catches network / connection error
                setError(err.message);
            })
    };

    useEffect(() => {
        getFilmCollection();
        setFirstFilm(filmCollection[0]);
    }, [filmCollection]);

    return (
        <>
            <Header />
            { error && <div>{ error }</div> }
            {firstFilm && <FilmContainer Film={firstFilm} />}
        </>
    );
}

export default MainLayout;