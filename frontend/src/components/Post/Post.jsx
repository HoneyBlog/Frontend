import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Typography from "@mui/material/Typography";
import EmojiPicker from "emoji-picker-react";
import Button from '../Button/Button'
import { createPost } from '../../apis/posts.api';
import "./post.styled.css";

const Postcomponent = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleEmojiClick = (emojiObject, event) => {
    if (textFieldValue.length < 300) {
      setTextFieldValue((prevValue) => prevValue + emojiObject.emoji);
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length <= 300) {
      setTextFieldValue(e.target.value);
    }
  };

  const handlePost = async () => {
    try {
      console.log('Creating post');
      await createPost({ content: textFieldValue }); // Assuming createPost accepts an object with 'content' field
      setTextFieldValue('');
      // Update state or trigger a refresh of posts if needed without reloading the entire page
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div className="post-container">
      <div className="post-row1">
        <Avatar alt="User Avatar" className="post-avatar" />
        <TextField
          placeholder="What's happening?"
          multiline
          maxRows={4}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: { color: "white" },
          }}
          className="post-textfield"
          value={textFieldValue}
          onChange={handleChange}
        />
      </div>
      <div className="post-row2">
        <div>
          <IconButton color="primary">
            <ImageIcon className="post-icon" />
          </IconButton>
          <IconButton color="primary">
            <GifIcon className="post-icon" />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <EmojiEmotionsIcon className="post-icon" />
          </IconButton>
        </div>
        <Button
          variant="contained"
          text="Post"
          paddingUpDown="10px"
          paddingRightLeft="20px"
          fontSize="0.9rem"
          onClick={handlePost} // Directly pass handlePost function here
        />
      </div>
      <div className="emoji-picker-container">
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
      </div>
      <Typography variant="caption" style={{ color: "white" }}>
        {textFieldValue.length}/300
      </Typography>
    </div>
  );
};

export default Postcomponent;
