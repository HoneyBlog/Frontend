import React from "react";
import Header from "../components/Header/Header";
import Postcomponent from "../components/Post/Post";

import "./HomePage.styled.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="postHome">
        <Postcomponent />
      </main>
    </>
  );
};

export default HomePage;
