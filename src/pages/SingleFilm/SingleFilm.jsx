import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { api } from "../../api";
import { useAuthContext } from "../../authContext";
import "./SingleFilm.css";

export const SingleFilm = () => {
  const [url, setUrl] = useState("");
  const { pathname } = useLocation();
  const { movieInfo } = useAuthContext();
  let movieName = pathname.split("/");
  movieName = decodeURI(movieName[2]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/search", {
        params: { q: `${movieName} trailer netflix` },
      });
      const id = res.data.items[0].id?.videoId || res.data.items[1].id?.videoId;
      const url = `https://www.youtube.com/embed/${id}`;
      setUrl(url);
    })();
  }, [movieName]);

  return (
    <div className="movie" style={{ color: "white" }}>
      <iframe
        className="movie_iframe"
        src={url}
        allowFullScreen
        title="naveen"
      />
      <div className="movie_info">
        <h1 className="movie_para">
          <span className="movie_head">MovieName:</span> {movieName}
        </h1>
        <h3 className="movie_para">
          <span className="movie_head">Overview: </span>
          {movieInfo?.overview}
        </h3>
        <h4 className="movie_para">
          <span className="movie_head">Language: </span>
          {movieInfo?.lang}
        </h4>
        <h4 className="movie_para">
          <span className="movie_head">ReleaseDate:</span> {movieInfo?.date}
        </h4>
      </div>
    </div>
  );
};
