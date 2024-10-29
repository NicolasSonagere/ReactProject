export function Card({ movie }){
    return (
    <div>
        <h3>{movie.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        <p></p>
        <p>{movie.overview}</p>
    </div>
    )
}