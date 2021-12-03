const FilmContainer = ({ film }) => {
    
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