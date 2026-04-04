import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./index.css"

import Container from "react-bootstrap/Container"
import Row from"react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import AttendanceLog from "./attendanceLog/AttendanceLog"
import CardReader from "./cardreader/CardReader"
import AddCardReader from "./cardreader/AddCardReader"
import UserProvider from "./UserProvider"
import CardReaderProvider from "./cardreader/CardReaderProvider"
import AttedanceLogProvider from "./attendanceLog/AttendanceLogProvider"
import {useState} from "react"

export default function App() {
  const [showAddCardReader,setShowAddCardReader] = useState(false)
  return (
    <div className="App">
      <UserProvider>
      <AddCardReader show = {showAddCardReader} setShow = {setShowAddCardReader}/>
      <Container>
         <Row>
            <Col>
               <Button variant = "primary" onClick = {_ => setShowAddCardReader(true)}>Add Card Reader</Button>
               <Button variant= "secondary">Login</Button>
              <CardReaderProvider>
                
              </CardReaderProvider>
            </Col>
            <Col>
              <Form.Select>
                 <option>this day</option>
                 <option>this week</option>
              </Form.Select>
               <AttedanceLogProvider>
                <AttendanceLog/>
               </AttedanceLogProvider>
            </Col>
         </Row>
      </Container>
      </UserProvider>
    </div>
  )
}