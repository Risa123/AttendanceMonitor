import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./index.css"

import Container from "react-bootstrap/Container"
import Row from"react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import AttendanceLog from "./attendanceLog/AttendanceLog"
import AddCardReader from "./cardreader/AddCardReader"
import {UserProvider} from "./UserProvider"
import {CardReaderProvider} from "./cardreader/CardReaderProvider"
import {useState} from "react"
import { AttendanceLogProvider } from "./attendanceLog/AttendanceLogProvider"
import CardReader from "./cardreader/CardReader"
import Login from "./Login"



export default function App() {
  const [showAddCardReader,setShowAddCardReader] = useState(false)
  return (
    <div className = "App">
      <UserProvider>
      <CardReaderProvider>
      <AddCardReader show = {showAddCardReader} setShow = {setShowAddCardReader}/>
      <Login/>
      <Container>
         <Row>
            <Col>
               <Button variant = "primary" onClick = {_ => setShowAddCardReader(true)}>Add Card Reader</Button>
               <CardReader/>
            </Col>
            <Col>
               <AttendanceLogProvider>
                  <AttendanceLog/>
               </AttendanceLogProvider>
            </Col>
         </Row>
      </Container>
      </CardReaderProvider>
      </UserProvider>
    </div>
  )
}