// import React from "react";
// import Header from "../components/Header/Header";
// import Postcomponent from "../components/Post/Post";
// import Search from "../components/Search/Search";

// import "./HomePage.styled.css";

// const HomePage = () => {
//   return (
//     <>
//       <Header />
//       <main className="postHome">
//         <Postcomponent />
//       </main>
//     </>
//   );
// };

// export default HomePage;
// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header/Header';
import Postcomponent from '../components/Post/Post';
import Search from '../components/Search/Search';
import './HomePage.styled.css';

const HomePage = () => {
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="mainContent">
          <Postcomponent />
        </div>
        <aside className="sidebar">
          <Search placeholder="Search..." handleChange={handleSearchChange} />
        
        </aside>
      </div>
    </>
  );
};

export default HomePage;
