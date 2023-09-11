import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "./images/image.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "rgb(40, 44, 52)" }}>
                This is a header
            </h1>
            <img src={img} alt="Walking Cat" width="200" height="133.2" />
            <ul>
                <li> 1st Element</li>
                <li> 2nd Element</li>
                <li> 3rd Element</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <p>First column</p>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <p>Second column</p>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>Octavian Anghel</div>
            <div>Hello World</div>
        </div>
    );
}

export default App;
