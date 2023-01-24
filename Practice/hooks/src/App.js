import React from "react";
import { Col, Row } from "reactstrap";
import HookUseCallback from "./AllHooks/HookUseCallback";
import HookUseContext from "./AllHooks/HookUseContext";
import HookUseEffect from "./AllHooks/HookUseEffect";
import useFetchAPI from "./AllHooks/HookUseFetchAPI";
import HookUseImperativeHandler from "./AllHooks/HookUseImperativeHandler";
import HookUseLayoutEffect from "./AllHooks/HookUseLayoutEffect";
import HookUseMemo from "./AllHooks/HookUseMemo";
import HookUseReducer from "./AllHooks/HookUseReducer";
import HookUseRef from "./AllHooks/HookUseRef";
import HookUseRef2 from "./AllHooks/HookUseRef2";
import HookUseState from "./AllHooks/HookUseState";
import "./App.css";

function App() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(data);

  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...!</p>;

  return (
    <div className="App">
      <Row>
        <Col className="border p-4">
          <HookUseState />
          <p />
        </Col>
        <Col className="border p-4">
          <HookUseEffect />
          <p />
        </Col>
        <Col className="border p-4">
          <HookUseMemo />
          <p />
        </Col>
        <Col className="border p-4">
          <HookUseCallback />
          <p />
        </Col>
      </Row>
      <Row>
        <Col className="border p-4">
          <HookUseRef />
        </Col>
        <Col className="border p-4">
          <HookUseRef2 />
        </Col>
        <Col className="border p-4">
          <HookUseContext />
        </Col>
        <Col className="border p-4">
          <HookUseReducer />
        </Col>
        <Col className="border p-4">
          <HookUseImperativeHandler />
        </Col>
      </Row>
      <Row>
        <Col className="border p-4">
          <HookUseLayoutEffect />
        </Col>
        <Col className="border p-4">
          <ul>
            {data?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default App;
