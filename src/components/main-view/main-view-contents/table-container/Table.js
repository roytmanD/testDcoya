import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Modal from 'react-modal';

import AddIcon from '@material-ui/icons/AddCircle';

//css
import "./TableBox.css";

const columns = ["ID", "First Name", "Last Name", "Email", "Phone Number", "Department", "Role", "Manager", "Branch","Country", "Group"];

const BASE_URL = "https://api.mlab.com/api/1/databases/dcoya";
const API_KEY = "fiJTwMUnuaXLxBzoZVfra9axFZvrkk8S";

const options = {
   selectableRows: 'none'
};


class EmployeeTable extends React.Component{
  constructor(){
    super();
    this.state = {
      employees: [],
      modalIsOpen: false
    }
  }

  openModal = () => {
      this.setState({modalIsOpen: true});
    }

    closeModal= () =>{
  this.setState({modalIsOpen: false});
}

 fetchData = () =>{
  const url = `${BASE_URL}/collections/employees?apiKey=${API_KEY}`;
  fetch(url).then(res =>res.json().then(response=> {
    console.log(response);
    this.setState({employees:response, modalIsOpen:false})
  }));
}
  addEmployee = () =>{

    const firstNameInput = document.querySelector('#first_name').value;
    const lastNameInput = document.querySelector('#last_name').value;
    const emailInput = document.querySelector('#email').value;
    const phoneInput = document.querySelector('#phone_number').value;
    const departmentInput = document.querySelector('#department').value;
    const roleInput = document.querySelector('#role').value;
    const managerInput = document.querySelector('#manager').value;
    const branchInput = document.querySelector('#branch').value;
    const countryInput = document.querySelector('#country').value;
    const groupInput = document.querySelector('#group').value;

    const newEmployee = [
      ++this.state.employees.length,
      firstNameInput,
      lastNameInput,
      emailInput,
      phoneInput,
      departmentInput,
      roleInput,
      managerInput,
      branchInput,
      countryInput,
      groupInput
    ];

    const url = `${BASE_URL}/collections/employees?apiKey=${API_KEY}`;
    fetch(url,
    {
      headers:{ "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify({data:newEmployee})
    }).then(res=>console.log(res));

    //fetches new data and closes modal
    this.fetchData();
}

  getMuiTheme = () => createMuiTheme({
     overrides: {
       MUIDataTableBodyCell: {
         root: {
           width: "10em",
           fontSize: "7pt",
           color: "#232341",
           padding: "6px"
         }
       },
     }
   });

   componentDidMount(){
     this.fetchData();
   }

  render(){
console.log(this.state.employees);
    return(
    <div className="table-box">
      <AddIcon id="add_empoyee" onClick={this.openModal}/>

      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{
             overlay: {
               backgroundColor:'none',
               width: '150px',
               height: '250px',
               marginLeft: '20em',
               marginTop: '10em',
               zIndex:'100'
             },
             content: {
               width: '150px',
               height: '250px',
               color: 'lightsteelblue',
               border: '2px solid lightsteelblue',
               borderRadius: '25px'
             }
           }}
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Add employee</h2>
          <input placeholder="First name" id="first_name"/>
          <input placeholder="Last name" id="last_name"/>
          <input placeholder="Email" id="email"/>
          <input placeholder="Phone number" id="phone_number"/>
          <input placeholder="Department" id="department"/>
          <input placeholder="Role" id="role"/>
          <input placeholder="Manager" id="manager"/>
          <input placeholder="Branch" id="branch"/>
          <input placeholder="Country" id="country"/>
          <input placeholder="Group" id="group"/>

            <input type="submit" onClick={this.addEmployee} value="Add"/>
            <button onClick={this.closeModal}>cancel</button>
        </Modal>

     <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
        data={this.state.employees.map(employee=>employee.data)}
        columns={columns}
        options={options}
        />
      </MuiThemeProvider>
    </div>
    );
  }
}
//data={this.state.employees.map(employee=> [employee._id.$oid].concat(employee.data))}
export default EmployeeTable;
