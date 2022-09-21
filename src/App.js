import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from "./components/NotFound";
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register/Register';
import Database from './components/Datebase/Database';
import UsersPage from './components/UsersPage/UsersPage';

import './App.css'

const App = () => {
    return (
      <Layout>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/database"
          element={
            <PrivateRoute roles={["Admin"]}>
              <Database />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute roles={["Admin"]}>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Layout>
    );
};

export default App;