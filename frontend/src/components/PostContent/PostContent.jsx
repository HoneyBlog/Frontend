import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import {
  PostContainer,
  PostHeader,
  PostAvatar,
  UserName,
//   PostTime,
  PostContentText,
  PostImage,
  PostFooter,
  IconButtonStyled,
  LikeCount,
  CommentCount,
  PostFooterIcons
} from './PostContent.styled';
import postImage from '../../../assets/postcontent.png'; 

const PostTemplate = () => {
    return (
      <PostContainer>
        <PostHeader>
          <PostAvatar alt="User Avatar" />
          <div>
            <UserName>Devon Lane</UserName>
            {/* <PostTime>23s</PostTime> */}
          </div>
        </PostHeader>
        <PostContentText>Is this big enough for you?</PostContentText>
        {postImage && <PostImage src={postImage} alt="Post image" />}
        <PostFooter>
          <PostFooterIcons>
            <IconButtonStyled>
              <CommentIcon style={{ color: "white" }} />
              <CommentCount>61</CommentCount>
            </IconButtonStyled>
            <IconButtonStyled>
              <FavoriteIcon style={{ color: "white" }} />
              <LikeCount>6.2K</LikeCount>
            </IconButtonStyled>
          </PostFooterIcons>
        </PostFooter>
      </PostContainer>
    );
  };
  
export default PostTemplate;
