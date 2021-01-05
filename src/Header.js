import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className='header__icon' />
      </IconButton>

      <img className='header__logo'
        src="https://media1.giphy.com/media/4NcRoXBtemK2QHkLVd/giphy.gif"
        alt=""
      />

      <ForumIcon className='header__icon'/>
    </div>
  );
}

export default Header;
