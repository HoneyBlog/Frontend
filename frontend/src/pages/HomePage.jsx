import React from 'react';
import Header from '../components/Header/Header';
import Postcomponent from '../components/Post/Post';
import Search from '../components/Search/Search';
import './HomePage.styled.css';
import SearchContent from '../components/SearchContent/SearchContent';

const HomePage = () => {
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div id="warpper">
      <Header />
      <div className="container">
        <div className="mainContent">
          <Postcomponent />
        </div>
        <aside className="sidebar">
        <div className="search-container">
            <Search placeholder="Search HPBlog" handleChange={handleSearchChange} />
          </div>
          <SearchContent />

        </aside>
      </div>
    </div>
  );
};

export default HomePage;
