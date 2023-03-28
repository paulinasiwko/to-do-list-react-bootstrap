import { Card, Col } from "react-bootstrap";
import Priority from "../priority/priority";
import React from "react";
export default function SinglePriorityCard ({ priorityType, taskType, handleDeleteTask }) {
    return (
                <Col xs={12} md={6} lg={4}>
                    <Card className='mt-3 m-auto priorityTab'>
                        <Card.Body className='shadow'>
                            <Card.Title>
                                <Priority priority={priorityType}
                                          tasks={taskType}
                                          handleDeleteTask={handleDeleteTask} />
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
    );
}
