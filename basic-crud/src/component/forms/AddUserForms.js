import React, { useState } from 'react';
import {Button}  from 'react-bootstrap';
import './adduserforms.scss'


const AddUserForms = props => {
    const initialFormState = {id: null, name:'', username: ''}
    const [user,setUser] = useState(initialFormState)


    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    
    const handleSubmit = event => {
        if(!user.name || !user.username ) return

        props.addUser(user)
        setUser(initialFormState)
    }
    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" className="input-text" value={user.name}  onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username" className="input-text" value={user.username}  onChange={handleInputChange}/>
            <Button onClick= {handleSubmit}>Add new user</Button>
        </form>
    )
}

export default AddUserForms;