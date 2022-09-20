import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from "./components/NotFound";
import {Route} from 'react-router-dom';

import './App.css'

const App = () => {
    return (
      <Layout>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Layout>
    );
};

export default App;