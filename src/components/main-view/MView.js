import React from 'react';
import "./mview.css";

//myComponents
import ActivityBar from './main-view-contents/activity-bar/ActivityBar';
import EmployeeTable from './main-view-contents/table-container/Table';

class MView extends React.Component {


  render(){
    return(
      <div className="m-view">
        <ActivityBar/>
        <EmployeeTable/>
      </div>);
  }
}


export default MView;
