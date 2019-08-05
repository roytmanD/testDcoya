import React from 'react';
import './ld-style.css';
import menu from '../../../imgs/menu.png';

class LogoDropdown extends React.Component{

  render(){
    return(
      <div className="ld-box">
        <p>Dcoya</p>
        <img src={menu}/>
      </div>
    );
  }
};


export default LogoDropdown;
