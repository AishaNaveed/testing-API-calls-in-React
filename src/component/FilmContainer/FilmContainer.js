const FilmContainer = ({ film }) => {
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