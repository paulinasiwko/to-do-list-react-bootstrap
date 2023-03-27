import {Container, Navbar} from "react-bootstrap";
import React from "react";

export default function Title() {
    return (
        <Navbar expand='lg' variant='dark' style={{backgroundColor: '#87A96B'}}>
            <Container>
                <Navbar.Brand>
                    <h1>My To Do List</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
