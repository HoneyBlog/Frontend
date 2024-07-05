import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Postcomponent from '../components/Post/Post';
import Search from '../components/Search/Search';
import './HomePage.styled.css';
import SearchContent from '../components/SearchContent/SearchContent';
import PostContent from '../components/PostContent/PostContent';
import { checkJWTtoken } from '../apis/users.api';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  // checks every minue if the token is still valid
  useEffect(() => {
    const interval = setInterval(() => {
      checkJWTtoken()
        .then((response) => {
          console.log('Token is still valid:', response);
        })
        .catch((error) => {
          console.error('Token is invalid:', error);
          localStorage.removeItem('token');
          navigate('/login');
        });
    }, 60000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div id="warpper">
      <Header />
      <div className="container">
        <div className="mainContent">
          <Postcomponent />
          <PostContent />
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
