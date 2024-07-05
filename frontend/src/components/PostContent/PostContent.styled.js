import styled from 'styled-components';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

export const PostContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #1c1c1e;
  padding: 20px;
  border-radius: 10px;
  width: 39vw;
  gap: 10px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const PostAvatar = styled(Avatar)`
  margin-right: 10px;
`;

export const UserName = styled.div`
  font-weight: bold;
`;

export const PostTime = styled.div`
  color: #9b9b9b;
  font-size: 0.8rem;
`;

export const PostContentText = styled.div`
//   margin: 10px 0;
  color: white;
  text-align: left
`;

export const PostImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const IconButtonStyled = styled(IconButton)`
  color: white; 
`;

export const LikeCount = styled.span`
  color: #BEA6D8;
  margin-left: 5px;
  font-size: 1rem;
  `;

export const CommentCount = styled.span`
  color: #9b9b9b;
  margin-left: 5px;
  font-size: 1rem;
`;

export const PostFooterIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
`;
