import React, { Component } from 'react';
import Navbar from './Navbar';
import Table from './Table';
import styles from '../template/Home.module.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className={styles.tableContainer}>
                    <Table />
                </div>
            </div>
        );
    }
}
