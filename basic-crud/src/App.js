import React, { useState } from 'react';
import UserTable from './component/UserTable/userTable';
import {Col, Row} from 'react-bootstrap'

const App = () => {

  const usersData = [
    {id: 1, name: 'Sudharsan', username: 'suddy'},
    {id: 2, name: 'raghavan', username: 'rags'},
    {id: 3, name: 'kaushik', username: 'cow'},
    {id: 4, name: 'chandru', username: 'chandy'},
  ]
  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = user.length + 1;
    setUsers([...users,user]);
  }
  
  return (
    <div className="container">
      <h1>Basic Crud operations in React</h1>
      <Row className="row">
      <Col md={6} className="flex-large">
        <h2>Add Users</h2>
      </Col>
      <Col md={6} className="flex-large">
        <h2>View users</h2>
        <UserTable users={users}/>
      </Col>
    </Row>
    </div>
  )
}
export default App;
