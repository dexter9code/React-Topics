import React, { useState, useEffect } from "react";
import { sendData } from "./../../features/actionCreater";
import { useDispatch, useSelector } from "react-redux";

const MoviesList = function (props) {
  const notification = useSelector((state) => state.Ui.notification);
  const movies = useSelector((state) => state.Ui.moviesData);

  //   const [movies, setMovies] = useState(null);

  //   const gettingMovies = (movies) => {
  //     setMovies(movies);
  //   };

  return (
    <div>
      {console.log(movies)}
      {notification && (
        <section>
          <h5>{notification.title}</h5>
          <p>{notification.message}</p>
        </section>
      )}
    </div>
  );
};

export default MoviesList;
