import { useContext, useState } from "react"

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import UserContext, { InvalidCredentialsException } from "./UserProvider"

export default function Login() {
    const UserProvider = useContext(UserContext)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    return <Modal show = {UserProvider.getUser() === null}>
      <Modal.Header>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Label>name</Form.Label>
            <Form.Control type = "text" onChange = {e => setName(e.target.value.trim())}/>
            <Form.Label>password</Form.Label>
            <Form.Control type = "password" onChange = {e => setPassword(e.target.value.trim())}/>
            <Form.Label>{error}</Form.Label>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant = "primary" onClick={_ => {
           if (name.length !== 0 && password.length !== 0) {
             try {
              UserProvider.login(name, password)
             }catch (e) {
               console.log(e)
               if (e instanceof InvalidCredentialsException) {
                  setError(e.message)
               } else {
                 throw e
               }
             }
           }
          }}>Login</Button>
      </Modal.Footer>
    </Modal>
}