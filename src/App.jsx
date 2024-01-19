import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Topbar from "./components/TopBar";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10} className="col-12 col-md-9 offset-md-3 mainPage">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Player />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
