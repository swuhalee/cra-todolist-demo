import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { getTaskApi, addTaskApi } from "./apis/taskApi";

function App() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getTasks = async () => {
    const response = await getTaskApi();
    setTodos(response.data.data);
  };
  const addTask = async (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("할일은 필수 입력사항입니다.");
      return;
    }

    try {
      const response = await addTaskApi(title, description);
      if (response.status === 200) {
        alert("할일이 추가되었습니다.");
        setTitle("");
        setDescription("");
        getTasks();
      }
    } catch (error) {
      alert("할일 추가에 실패했습니다.");
      return;
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <form onSubmit={addTask}>
        <Row className="add-item-row">
          <Col xs={12} sm={10}>
            <input
              type="text"
              placeholder="할일을 입력하세요"
              className="input-box"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="설명을 입력하세요 (선택사항)"
              className="input-box"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
          <Col xs={12} sm={2}>
            <button type="submit" className="button-add">추가</button>
          </Col>
        </Row>
      </form>

      <TodoBoard todos={todos} getTasks={getTasks} />
    </Container>
  );
}

export default App;
