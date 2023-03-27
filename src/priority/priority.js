import TaskRow from "../task-row/task-row";
import {Container} from "react-bootstrap";
import React from "react";

export default function Priority({ priority, tasks, handleDeleteTask }) {
    const rows = tasks.map((x) => <TaskRow singleTask={x}
                                           key={x.id}
                                           handleDeleteTask={handleDeleteTask} />);

    return (
        <Container>
            <h3>{priority}</h3>
            {rows}
        </Container>
    );
}
