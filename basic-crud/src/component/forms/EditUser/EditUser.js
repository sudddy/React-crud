import React, {useState,useEffect} from 'react';
import  '../AddUser/adduserforms.scss'
import {Button} from 'react-bootstrap';



const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)
    
    useEffect(() => {
        setUser(props.currentUser)
      }, [props])

    const handleInputChange = event => {
      const { name, value } = event.target
  
      setUser({ ...user, [name]: value })
    }

    const handleSubmit = event => {
        props.updateUser(user.id, user)
    }

    const handleCancel = event => {
        props.setEditing(false)
    }
    return (
      <form>
        <label>Name</label>
        <input type="text" className="input-text" name="name" value={user.name} onChange={handleInputChange} />
        <label>Username</label>
        <input type="text" className="input-text" name="username" value={user.username} onChange={handleInputChange} />
        <Button onClick={handleSubmit} >Update user</Button> &nbsp;
        <Button onClick={handleCancel}className="button muted-button">
          Cancel
        </Button>
      </form>
    )
  }
  
  export default EditUserForm