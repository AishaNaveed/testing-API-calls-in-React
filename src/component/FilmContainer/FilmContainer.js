const FilmContainer = ({ film }) => {
    // console.log(film.length);
    // if(film.length > 0)
    //     console.log(film.title);
    return (
        <>
            <section className="card__container">
                <h2>{film?.title ?? "OOPS!!! Nothing is here"}</h2>
                <img src={film?.image} alt={film?.title} />
                <p>{film?.description}</p>
            </section>
        </>
    );
}

export default FilmContainer;