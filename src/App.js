import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from "./components/NotFound";
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Login from './components/Login';
import Profile from './components/Profile';

import './App.css'
import Register from './components/Register/Register';

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
        <Route path="*" element={<NotFound />} />
      </Layout>
    );
};

export default App;