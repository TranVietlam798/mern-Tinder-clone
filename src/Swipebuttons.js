import React from "react";
import "./Swipebuttons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

function Swipebutton() {
  return (
    <div className="swipebuttons">
      <IconButton className="swipebutton__repeat">
        <ReplayIcon className="large" />
      </IconButton>
      <IconButton className="swipebutton__left">
        <CloseIcon className="large" />
      </IconButton>
      <IconButton className="swipebutton__star">
        <StarIcon className="large" />
      </IconButton>
      <IconButton className="swipebutton__right">
        <FavoriteIcon className="large" />
      </IconButton>
      <IconButton className="swipebutton__lightning">
        <FlashOnIcon className="large" />
      </IconButton>
    </div>
  );
}

export default Swipebutton;
