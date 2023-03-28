import {Container, Navbar} from "react-bootstrap";
import React from "react";
import './title.css';
export default function Title() {
    return (
        <Navbar expand='lg'
                variant='dark'
                className='title'>
            <Container>
                <Navbar.Brand>
                    <h1>My To Do List</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
