import React from 'react';

//css
import './ActivityBar.css';

//icons
import NotificationIcon from '@material-ui/icons/NotificationImportantOutlined';
import ChartIcon from '@material-ui/icons/InsertChartOutlined';
import TimerIcon from '@material-ui/icons/Timer';
import FileIcon from '@material-ui/icons/FileCopyOutlined';
import MessageIcon from '@material-ui/icons/MailOutlined';

//myComponents
import ActivityBox from './activity-box/ActivityBox';

class ActivityBar extends React.Component{

  render(){

    return(
      <div className="activity-bar">
        {ActivityBox(<NotificationIcon fontSize="large"/>, 422, 'Headline 1')}
        {ActivityBox(<ChartIcon fontSize="large"/>, 882, 'Headline 2')}
        {ActivityBox(<TimerIcon fontSize="large"/>, 521, 'Headline 3')}
        {ActivityBox(<FileIcon fontSize="large"/>, 436, 'Headline 4')}
        {ActivityBox(<MessageIcon fontSize="large"/>, 765, 'Headline 5')}
      </div>
    );
  }
}


export default ActivityBar;
