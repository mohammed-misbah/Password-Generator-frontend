import axios from '../utils/axios';
import styles from '../template/Table.module.css'
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

const Table = () => {  
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('api/password_list/')
            .then((response) => {
                console.log("Reeesponse data>>>>>",response.data);
                setUsers(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`api/delete/${id}/`)
        .then((response) => {
            console.log("deletion sucessfull");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Deleted Successfully",
                showConfirmButton: false,
                timer: 150000,
            });
        })
    }

    return (
        <table className={styles.userTable}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>
                    <button className={styles.deleteButton} 
                    onClick={() => handleDelete(user.id)}>
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>

    );
}
export default Table;
