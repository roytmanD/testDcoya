import React from 'react';

//css
import  './ActivityBox.css';

//m-ui
//components
import Button from '@material-ui/core/Button';

export default function ActivityBox(icon, num,headline){
  return(
    <div className="activity-box">
      <div className='activity-contents'>
        <div className="icon-wrapper">
        <Button>{icon}</Button>
        </div>
        <div className='num-headline'>
        <h2 className='num'>{num}</h2>
        <h3>{headline}</h3>
        </div>
      </div>
    </div>
  );
}
