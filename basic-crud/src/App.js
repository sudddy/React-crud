import React, { useState, useReducer } from 'react';
import UserTable from './component/UserTable/userTable';
import { Col, Row } from 'react-bootstrap'
import AddUserForms from './component/forms/AddUser/AddUserForms';
import EditUserForm from './component/forms/EditUser/EditUser';
import ReactDOM from 'react-dom'

const App = () => {

  const usersData = [
    { id: 1, name: 'James', username: 'Bond' },
    { id: 2, name: 'Harry', username: 'Potter' }
  ]
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  // to add user
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  // to delete user 
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      {/* <h1>Basic Crud operations in React</h1> */}
      <Row className="row">
        {editing ? (
          <Col>
            <h2>Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Col>) : 
          (  <Col md={6} className="flex-large">
              <h2>Add Users</h2>
              <AddUserForms addUser={addUser} />
            </Col>
          )}


        <Col md={6} className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Col>
      </Row>
    </div>
  )
}
export default App;
