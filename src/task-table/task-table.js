import { Container, Row } from "react-bootstrap";
import AddTaskForm from "../add-task-form/add-task-form";
import React from "react";
import SinglePriorityCard from "../single-priority-card/single-priority-card";

export default function TaskTable({ tasks, handleDeleteTask, handleAddTask, handleDeleteAllTasks }) {

    let high = tasks.filter(task => task.priority === 1);
    let medium = tasks.filter(task => task.priority === 2);
    let low = tasks.filter(task => task.priority === 3);

    return (
        <Container>
            <Row>
                <SinglePriorityCard priorityType={'High Priority'}
                                    taskType={high}
                                    handleDeleteTask={handleDeleteTask} />
                <SinglePriorityCard priorityType={'Medium Priority'}
                                    taskType={medium}
                                    handleDeleteTask={handleDeleteTask} />
                <SinglePriorityCard priorityType={'Low Priority'}
                                    taskType={low}
                                    handleDeleteTask={handleDeleteTask} />
                <AddTaskForm handleAddTask={handleAddTask}
                             handleDeleteAllTasks={handleDeleteAllTasks} />
            </Row>
        </Container>
    );
}
