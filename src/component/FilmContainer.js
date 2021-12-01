const FilmContainer = ({ Film }) => {
    return (
        <>
            <section className="card__container">
                <h2>{Film.title}</h2>
                <img src={Film.image} alt={Film.title} />
                <p>{Film.description}</p>
            </section>
        </>
    );
}

export default FilmContainer;