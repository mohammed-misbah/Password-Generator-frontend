import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import PasswordForm from './PasswordForm';

export default class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<PasswordForm />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        );
    }
}
