import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login';
import SignUp from '../pages/SignUp'
import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} exact />  
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        {/* <Route path="/edit/:id" element={EditExpensePage} /> */}
        <Route element={<NotFoundPage />} />
    </Routes>
);

export default AppRouter;