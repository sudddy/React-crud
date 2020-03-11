import React from 'react';
import { Button } from 'react-bootstrap'

const UserTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                <tr key={user.id}>
                <td> {user.name}</td>
                <td> {user.username}</td>
                <td>
                    <Button className="button muted-button"> Edit</Button>&nbsp;
                    <Button className="button muted-button"> Delete</Button>
                </td>
            </tr>
                    
                ))
                ) : (
                    <tr>
                        <td colspan={3}> No users</td>
                    </tr>
                )
            }
            
        </tbody>
    </table>
)

export default UserTable;