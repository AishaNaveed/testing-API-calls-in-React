const FilmContainer = ({ film }) => {
    // console.log(film.length);
    // if(film.length > 0)
    //     console.log(film[0].title);
    const objFilm = film[0];
    return (
        <>
            <section className="card__container">
                <h2>{objFilm?.title ?? "OOPS!!! Nothing is here"}</h2>
                <img src={objFilm?.image} alt={objFilm?.title} />
                <p>{objFilm?.description}</p>
            </section>
        </>
    );
}

export default FilmContainer;