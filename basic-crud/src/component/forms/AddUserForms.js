import React, { useState } from 'react';
import {Button}  from 'react-bootstrap';
import './adduserforms.scss'


const AddUserForms = props => {
    const initialFormState = {id: null, name:'', username: ''}
    const [user,setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    return (
        <form
            onsubmit={event => {
                event.preventDefault()
                if(!user.name || !user.username ) return

                props.addUser(user);
                setUser(initialFormState);
                }}>
            <label>Name</label>
            <input type="text" name="name" class="input-text" value={user.name}  onchange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username" class="input-text" value={user.username}  onchange={handleInputChange}/>
            <Button>Add new user</Button>
        </form>
    )
}

export default AddUserForms;