import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./index.css"

import Container from "react-bootstrap/Container"
import Row from"react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import AttendanceLog from "./attendanceLog/AttendanceLog"
import CardReader from "./cardreader/CardReader"
import AddCardReader from "./cardreader/AddCardReader"

export default function App() {
  return (
    <div className="App">
      <AddCardReader show = {false}/>
      <Container>
         <Row>
            <Col>
               <Button variant = "primary">add access point</Button>
               <CardReader name = "main entrance reader"/>
            </Col>
            <Col>
              <AttendanceLog name = "Student1" time = "1.1.2025 12:00" cardReader = "main entrance"/>
            </Col>
         </Row>
      </Container>
    </div>
  )
}