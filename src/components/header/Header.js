import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//myComponents
import LogoDropdown from "./logo-dropdown/LogoDropdown.js";

//css
import './h-style.css';

//m-ui
import NotificationIcon from '@material-ui/icons/NotificationImportantOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined';


import SearchField from "react-search-field";

class Header extends React.Component{
constructor(props){
  super(props);
}

render(){

return(
  <div className="header-box">
    <LogoDropdown/>
    <div className="header-tp-box">
      <h2 className="view-title">{this.props.viewName}</h2>
      <p className="view-path">{`Dcoya/${this.props.viewName}`}</p>
    </div>

    <span className="sns-box">
    <form>
	     <input type="search" />
    </form>

    <Button>
      <NotificationIcon fontSize="default"/>
    </Button>
      <Button>
          <SettingsIcon fontSize="default"/>
      </Button>
    </span>
  </div>);
}

}

export default Header;
