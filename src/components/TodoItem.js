import React from "react";
import { Col, Row } from "react-bootstrap";
import { updateTaskApi, deleteTaskApi } from "../apis/taskApi";

const TodoItem = ({ todo, getTasks }) => {
  const updateTask = async () => {
    await updateTaskApi(todo._id, !todo.completed);
    getTasks();
  };

  const deleteTask = async () => {
    await deleteTaskApi(todo.id);
    getTasks();
  }

  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <div className="todo-content">{todo.title} {todo.description && <span>/ {todo.description}</span>}</div>
          <div>
            <button className="button-delete" onClick={deleteTask}>삭제</button>
            <button className="button-delete" onClick={updateTask}>{todo.completed ? "아직" : "끝남"}</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
