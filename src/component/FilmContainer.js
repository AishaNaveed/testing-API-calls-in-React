const FilmContainer = ({ Film }) => {
    return (
        <>
            <h2>Film Name :- {Film?.title}</h2>
            <img src={Film?.image} alt={Film?.title} />
            <p>{Film?.description}</p>
        </>
    );
}

export default FilmContainer;