import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./index.css"

import Container from "react-bootstrap/Container"
import Row from"react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import AccessPoint from "./accessPoint/AccessPoint"
import Access from "./access/Access"

export default function App() {
  return (
    <div className="App">
      <Container>
         <Row>
            <Col>
               <Button variant = "primary">add access point</Button>
               <AccessPoint name = "access point test"/>
            </Col>
            <Col>
              <Access/>
            </Col>
         </Row>
      </Container>
    </div>
  )
}