import React, { useEffect } from "react";
import "./App.css";
import UseReducerEx from "./components/UseReducer";
import ChildComp from "./components/lifting/ChildCom";
import SblingComp from "./components/lifting/SiblingComp";
import Main from "./components/Portal/Main";
import Index from "./components/Effects/Index";
import Login from "./components/Login/Login";
import RedSib from "./components/redSibling1/RedSib";
import RedSib2 from "./components/redSibling2/RedSib2";
import MoviesList from "./components/thuks/MoviesList";
import { useDispatch } from "react-redux";
import { sendData } from "./features/actionCreater";

function App() {
  // const [data, setData] = React.useState({});
  // const getData = (data) => {
  //   setData(data);
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendData());
  }, [dispatch]);

  return (
    <div>
      {/* <UseReducerEx /> */}
      {/* <ChildComp onClickData={getData} />
      <SblingComp data={data} /> */}
      {/* <Main /> */}
      {/* <Index /> */}
      {/* <Login /> */}
      {/* <RedSib />
      <RedSib2 /> */}
      <MoviesList />
    </div>
  );
}

export default App;
