import React from 'react';

//css
import "./LMBox.css";

import NestedList from './nested-menu-list/NestedMenuList.js';

class LMBox extends React.Component{

  render(){

    return(
      <div className="list-menu-box">
        <NestedList/>
      </div>);
  }
}


export default LMBox;
