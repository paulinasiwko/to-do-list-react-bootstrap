import React, {useState} from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FaCheck, FaPencilAlt, FaSave } from "react-icons/fa";
import './task-row.css';

export default function TaskRow({ singleTask, handleDeleteTask }) {
    const [hover, setHover] = useState({display: 'none'});
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(singleTask.name);

    function handleCompletedClick() {
        handleDeleteTask(singleTask.id);
    }

    return (
        <Container
            onPointerEnter={e => setHover({display: 'block'})}
            onPointerLeave={e => setHover({display: 'none'})}>
            <Card className='mt-3 taskRowColor'>
                <Card.Body>
                    {isEditing ? (
                        <input defaultValue={editedTask}
                               onChange={e => {
                                   setEditedTask(e.target.value)}}>
                        </input>
                    ) : (
                        <p>{editedTask}</p>
                    )}
                </Card.Body>
                <Button variant="success"
                        size='sm'
                        style={hover}
                        onClick={e => {
                            e.preventDefault();
                            setIsEditing(!isEditing);
                        }}>{isEditing ? <span><FaSave /> Save</span> : <span><FaPencilAlt /> Edit</span>}
                </Button>
                <Button variant="success"
                        size='sm'
                        className='mt-1'
                        style={hover}
                        onClick={handleCompletedClick}><FaCheck /> Done</Button>
            </Card>
        </Container>
    );
}
