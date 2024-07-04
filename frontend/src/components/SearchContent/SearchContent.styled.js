// src/components/SearchContent/SearchContent.styled.js
import styled from "styled-components";

export const StyledSearchContent = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  color: #fff;
   opacity: 0.6;
  background-color: #3d3347;
  


  .title {
    margin-bottom: 16px;
    color: #fff;
    font-weight: bold;
  }

  .newsList {
    padding: 0;
    margin: 0;
  }

  .newsItem {
    padding: 0;
    margin-bottom: 16px;
  }

  .newsCard {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #4b3d59;
    color: #fff;
    box-shadow: none;
    border-radius: 10px;
  }

  .newsImage {
    width: 100px;
    height: 100px;
    border-radius: 10px 0 0 10px;
    margin-right: 10px;
  }

  .newsContent {
    flex: 1;
    padding: 10px;
  }

  .newsTitle {
    font-size: 16px;
    font-weight: bold;
  }

  .newsTime {
    color: #aaa;
    font-size: 12px;
    margin-bottom: 8px;
  }

  .newsDescription {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .newsHashtag {
    color: #1da1f2;
    font-size: 14px;
  }

  .newsLink {
    color: #1da1f2;
    text-decoration: none;
  }

  .showMore {
    color: #1da1f2;
    display: block;
    margin-top: 16px;
    text-align: center;
    text-decoration: none;
  }
`;
