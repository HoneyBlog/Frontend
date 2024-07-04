// src/components/SearchContent/SearchContent.jsx
import React from 'react';
import { Card, CardContent, Typography, CardMedia, List, ListItem, Link } from '@mui/material';
import { StyledSearchContent } from './SearchContent.styled';
import searchContent1 from '../../../assets/searchcontent1.png';
import searchContent2 from '../../../assets/searchcontent2.png';
import searchContent3 from '../../../assets/searchcontent3.png';

const SearchContent = () => {
    const news = [
      {
        title: 'COVID 19',
        time: 'Last night',
        description: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic',
        image: searchContent1,
        hashtag: '#covid19',
      },
      {
        title: 'US news',
        time: '4h ago',
        description: 'Parler may go offline following suspensions by Amazon, Apple and Google',
        image: searchContent2,
        hashtag: '#trump',
      },
      {
        title: 'India',
        time: '1h ago',
        description: 'India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test',
        image: searchContent3,
        hashtag: '#sport',
      },
    ];
  
    return (
      <StyledSearchContent>
        <Typography variant="h5" component="div" className="title">
          What's happening
        </Typography>
        <List className="newsList">
          {news.map((item, index) => (
            <ListItem key={index} className="newsItem">
              <Card className="newsCard">
                <CardContent className="newsContent">
                  <Typography component="div" variant="h6" className="newsTitle">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" className="newsTime">
                    {item.time}
                  </Typography>
                  <Typography variant="body2" className="newsDescription">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" className="newsHashtag">
                    Trending with <Link href="#" className="newsLink">{item.hashtag}</Link>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  className="newsImage"
                  image={item.image}
                  alt="news image"
                />
              </Card>
            </ListItem>
          ))}
        </List>
        <Link href="#" className="showMore">
          Show more
        </Link>
      </StyledSearchContent>
    );
  };
  
  export default SearchContent;