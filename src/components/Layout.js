import React from 'react';
import { Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';
import NavMenu from './NavMenu';

const Layout = (props) => {

    return (
        <div>
            <NavMenu />
            <Container className="mt-4">
                <Routes>
                    {props.children}
                </Routes>
            </Container>
            <ToastContainer position="bottom-right" toastClassName="dark-toast" transition={Zoom} theme="dark" />
        </div>
    );
}

export default Layout;