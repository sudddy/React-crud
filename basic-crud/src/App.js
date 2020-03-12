import React, { useState } from 'react';
import UserTable from './component/UserTable/userTable';
import {Col, Row} from 'react-bootstrap'
import AddUserForms from './component/forms/AddUserForms';
import ReactDOM from 'react-dom'

const App = () => {

  const usersData = [
    {id: 1, name: 'Sudharsan', username: 'suddy'},
    {id: 2, name: 'raghavan', username: 'rags'},
    {id: 3, name: 'kaushik', username: 'cow'},
    {id: 4, name: 'chandru', username: 'chandy'},
  ]
  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users,user]);
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  
  return (
    <div className="container">
      {/* <h1>Basic Crud operations in React</h1> */}
      <Row className="row">
      <Col md={6} className="flex-large">
        <h2>Add Users</h2>
        <AddUserForms addUser={addUser}/>
      </Col>
      <Col md={6} className="flex-large">
        <h2>View users</h2>
        <UserTable users={users} deleteUser={deleteUser} />
      </Col>
    </Row>
    </div>
  )
}
export default App;
