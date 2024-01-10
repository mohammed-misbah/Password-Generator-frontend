import React, { useState } from "react";
import styles from '../template/PasswordForm.module.css';
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from '../utils/axios'



export default function PasswordGenerate() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleGenerate = (e) => {
        e.preventDefault();
        console.log(inputs);

    if (!inputs.username || !inputs.password) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Please fill in all fields",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
    }
    if (!isValidPassword(inputs.password)){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Your password must contain at least one uppercase letter, one lowercase letter, and one number.",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
    }
    console.log(inputs);
        const data = {
            username: inputs.username,
            password: inputs.password,
        };
        axios
            .post("api/generate/", data)
            .then((response) => {
                console.log("Getting a data",response.data);
                if (response.status === 409) {
                    console.log("Response's here");
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: "Username Already has an Account",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                } else if (response.status === 200) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Success",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Success",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    navigate("/home");
                }
            });
        };
            const isValidPassword = (password) => {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
                return passwordRegex.test(password);
            }
        return (
            <div>
            <Navbar/>
            <section className={styles.customSection}>
                <div className={styles.contentContainer}>
                    <div className={styles.formContainer}>
                        <div className={styles.formContent}>
                            <h1 className={styles.title}>Generate Password</h1>
                            <form className={styles.form} onSubmit={handleGenerate}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name" className={styles.label}>Your name</label>
                                    <input 
                                    value={inputs.username}
                                    onChange={handleChange}
                                    type="username" 
                                    name="username" 
                                    id="username" 
                                    className={styles.input} 
                                    placeholder="Your sweet name"/>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="password" className={styles.label}>Password</label>
                                    <input 
                                    value={inputs.password}
                                    onChange={handleChange}
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    className={styles.input} 
                                    placeholder="••••••••"/>
                                </div>
                                <button type="submit" className={styles.submitButton}>
                                    Generate
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
}
