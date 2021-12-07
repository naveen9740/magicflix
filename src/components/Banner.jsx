import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../authContext";
import { instance } from "../config/axios";
import { requests } from "../config/Requests";

export const Banner = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { setMovieInfo } = useAuthContext();
  useEffect(() => {
    const fetchData = async () => {
      const req = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button
            onClick={() => {
              navigate(
                `/movie/${
                  movie?.name || movie?.original_title || movie?.original_name
                }`
              );
              setMovieInfo({
                overview: movie?.overview,
                lang: movie?.original_language,
                date: movie?.first_air_date,
              });
            }}
            className="banner_button"
          >
            Play
          </button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};
