import React, {useState} from "react";
import { Button, Card, Col, Form, FormGroup } from "react-bootstrap";

export default function AddTaskForm({ handleAddTask, handleDeleteAllTasks }) {
    const [newTask, setNewTask] = useState({
        priority: 1,
        name: ''
    });
    const [taskTextarea, setTaskTextarea] = useState('');

    function handleTaskChange(e) {
        setNewTask({
            ...newTask,
            name: e.target.value
        });
        setTaskTextarea(e.target.value);
    }

    function handlePriorityChange(e) {
        if (e.target.value === 'High Priority') {
            setNewTask({
                ...newTask,
                priority: 1
            });
        } else if (e.target.value === 'Medium Priority') {
            setNewTask({
                ...newTask,
                priority: 2
            });
        } else if (e.target.value === "Low Priority") {
            setNewTask({
                ...newTask,
                priority: 3
            });
        }
    }

    return (
        <>
            <Col className='mt-3' xs={12} md={6} lg={4}>
                <Card style={{margin: 'auto'}}>
                    <Card.Header className='p-3'
                                 style={{backgroundColor: '#87A96B', color: 'white'}}>
                        <h5>Add New Task</h5>
                    </Card.Header>
                    <Card.Body className='shadow'>
                        <Form>
                            <Form.Group>
                                <Form.Select onChange={handlePriorityChange}>
                                    <option value='High Priority'>High Priority</option>
                                    <option value='Medium Priority'>Medium Priority</option>
                                    <option value='Low Priority'>Low Priority</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    className='mt-3'
                                    type='text'
                                    placeholder='Task'
                                    value={taskTextarea}
                                    onChange={handleTaskChange} />
                            </Form.Group>
                            <FormGroup className='mt-3'>
                                <Button
                                    className='me-2'
                                    variant='success'
                                    size='sm'
                                    type='submit'
                                    onClick={e => {
                                        e.preventDefault();
                                        handleAddTask(newTask);
                                        setTaskTextarea('');
                                    }}>Submit</Button>
                                <Button
                                    variant='success'
                                    size='sm'
                                    onClick={handleDeleteAllTasks}>Delete All Tasks</Button>
                            </FormGroup>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}
