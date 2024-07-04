import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmojiPicker from "emoji-picker-react";
// import Button from '../Button/Button';

import "./post.styled.css";


const Postcomponent = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleEmojiClick = (emojiObject, event) => {
    setTextFieldValue((prevValue) => prevValue + emojiObject.emoji);
  };

  return (
    <div className="post-container">
      <div className="post-row1">
        <Avatar alt="User Avatar" className="post-avatar" />
        <Typography>
          <TextField
            placeholder="What's happening?"
            multiline
            rowsMax={4}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { color: "white" },
            }}
            className="post-textfield"
            value={textFieldValue}
            onChange={(e) => setTextFieldValue(e.target.value)}
          />
        </Typography>
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
        <Button variant="contained" id="post-button">
          Post
        </Button>
      </div>
      <div className="emoji-picker-container">
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
      </div>
    </div>
  );
};

export default Postcomponent;
