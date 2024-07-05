import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import {
  PostContainer,
  PostHeader,
  PostAvatar,
  UserName,
  PostContentText,
  PostImage,
  PostFooter,
  IconButtonStyled,
  LikeCount,
  CommentCount,
  PostFooterIcons
} from './PostContent.styled';
import postImage from '../../../assets/postcontent.png'; 



const PostContent = ({ posts }) => {
  return (
    <div>
      {posts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => (
          <PostContainer key={post.id}>
            <PostHeader>
              <PostAvatar alt="User Avatar" />
              <div>
                <UserName>{post.username}</UserName>
              </div>
            </PostHeader>
            <PostContentText>{post.content}</PostContentText>
            {postImage && <PostImage src={postImage} alt="Post image" />}
            <PostFooter>
              <PostFooterIcons>
                <IconButtonStyled>
                  <CommentIcon style={{ color: "white" }} />
                  <CommentCount>{post.comments_number}</CommentCount>
                </IconButtonStyled>
                <IconButtonStyled>
                  <FavoriteIcon style={{ color: "white" }} />
                  <LikeCount>{post.likes_number}</LikeCount>
                </IconButtonStyled>
              </PostFooterIcons>
            </PostFooter>
          </PostContainer>
        ))
      )}
    </div>
  );
};

export default PostContent;