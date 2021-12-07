import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../authContext";
import { instance } from "../config/axios";

export const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/original/";
  const { setMovieInfo } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => {
                  navigate(
                    `/movie/${
                      movie?.name ||
                      movie?.original_title ||
                      movie?.original_name
                    }`
                  );
                  setMovieInfo({
                    overview: movie?.overview,
                    lang: movie?.original_language,
                    date: movie?.first_air_date,
                  });
                }}
                key={movie?.id}
                className={`row_poster ${isLargeRow && `row_posterLarge`}`}
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie.backdrop_path
                }`}
                alt={
                  movie?.name || movie?.original_title || movie?.original_name
                }
              />
            )
        )}
      </div>
    </div>
  );
};
