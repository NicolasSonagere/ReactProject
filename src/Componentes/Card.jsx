export function Card({ movie }) {
    return (
      <div className="w-full max-w-[18rem] relative group mx-6 my-10">
        <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <p className="text-white text-sm p-4">{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
  