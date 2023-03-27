import './App.css';
import React from 'react';
import { useState } from 'react';
import { Button, Card, Container, Col, Form, Navbar, Row, FormGroup } from 'react-bootstrap';

function BottomForm({ handleAddTask, handleDeleteAllTasks }) {
  const [newTask, setNewTask] = useState({
    priority: 1,
    name: ''
  });

  function handleTaskChange(e) {
    setNewTask({
      ...newTask,
      name: e.target.value
    });
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
          <Col className='mt-3' xs={12} sm={12} md={6} lg={4}>
            <Card style={{margin: 'auto'}}>
              <Card.Header className='p-3' style={{backgroundColor: '#87A96B', color: 'white'}}>
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
                      value={newTask.name}
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

function Title() {
  return (
    <Navbar expand='lg' variant='dark' style={{backgroundColor: '#87A96B'}}>
      <Container>
        <Navbar.Brand style={{textAlign: 'center'}}>
         <h1>My To Do List</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

function TaskRow({ singleTask, handleDeleteTask }) {
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
        <Card className='mt-3' style={{backgroundColor: '#d6e6cb'}}>
          <Card.Body>
          {isEditing ? (
              <input defaultValue={editedTask} onChange={e => {
                setEditedTask(e.target.value)}}></input>
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
                  }}>{isEditing ? 'Save' : 'Edit'}</Button>
          <Button variant="success" 
                  size='sm'
                  className='mt-1'
                  style={hover}
                  onClick={handleCompletedClick}>Task Completed</Button>
        </Card>
    </Container>
  );
}

function Priority({ priority, tasks, handleDeleteTask }) {
  const rows = tasks.map((x) => <TaskRow singleTask={x} key={x.id} handleDeleteTask={handleDeleteTask} />);

  return (
    <Container>
      <h3>{priority}</h3>
      {rows}
    </Container>
  );
}

function TaskTable({ tasks, handleDeleteTask, handleAddTask, handleDeleteAllTasks }) {

  let high = tasks.filter(task => task.priority === 1);
  let medium = tasks.filter(task => task.priority === 2);
  let low = tasks.filter(task => task.priority === 3);


  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card className='mt-3 priorityTab' style={{margin: 'auto'}}>
            <Card.Body className='shadow'>
              <Card.Title>
                <Priority priority={'High Priority'} tasks={high} handleDeleteTask={handleDeleteTask} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card className='mt-3 priorityTab2' style={{margin: 'auto'}}>
            <Card.Body className='shadow'>
              <Card.Title>
                <Priority priority={'Medium Priority'} tasks={medium} handleDeleteTask={handleDeleteTask} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card className='mt-3 priorityTab' style={{margin: 'auto'}}>
            <Card.Body className='shadow'>
              <Card.Title>
                <Priority priority={'Low Priority'} tasks={low} handleDeleteTask={handleDeleteTask} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <BottomForm handleAddTask={handleAddTask} handleDeleteAllTasks={handleDeleteAllTasks} />
      </Row>
    </Container>
  );
}

function ToDoList() {
  const [listOfTasks, setListOfTasks] = useState([
    {priority: 1, name: "Prepare presentation", id: 1},
    {priority: 3, name: "Wash dishes", id: 2},
    {priority: 2, name: "Yoga", id: 3},
    {priority: 2, name: "Groceries", id: 4},
    {priority: 1, name: "Pay bills", id: 5},
    {priority: 3, name: "Buy flowers", id: 6}
  ]);
  const [counter, setCounter] = useState(7);

  function handleAddTask(newTask) {
    setCounter(counter + 1);
    setListOfTasks([
      ...listOfTasks,
      {priority: newTask.priority, name: newTask.name, id: counter}
    ]);
  }

  function handleDeleteTask(id) {
    setListOfTasks(listOfTasks.filter(lt => lt.id !== id));
  }

  function handleDeleteAllTasks() {
    setListOfTasks([]);
  }
  

  return (
    <div>
      <Title />
      <TaskTable tasks={listOfTasks}
                 handleDeleteTask={handleDeleteTask}
                 handleAddTask={handleAddTask}
                 handleDeleteAllTasks={handleDeleteAllTasks}/>
    </div>
  )
}

export default function App() {
  return <ToDoList />
}

/*
3. po dodaniu taska pole ma sie wyczyscic
5. Ptaszek zamiast TASK COMPLETED
*/