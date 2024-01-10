// Uncomment this line if you're using react-icons in your project
// import { FaBars, FaTimes} from 'react-icons/fa';
import React, { Component } from "react";
import styles from '../template/Navbar.module.css';

export default class Navbar extends Component {
    render() {
        return (
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                        </li>
                        <li className={styles.loginButton}>
                            Password Generator
                        </li>
                    </ul>
                </nav>
            </header>

        );
    }
}
