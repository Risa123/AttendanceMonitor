import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useContext, useState } from "react"

import CardReaderContext from "./CardReaderProvider"

export default function AddCardReader({show,setShow}) {
    const [name, setName] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const CardReaderProvider = useContext(CardReaderContext)
    return <Modal show = {show}>
         <Modal.Header>
            <Modal.Title>Add Card Reader</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form>
             <Form.Label>name</Form.Label>
             <Form.Control type = "text" onChange = {e => setName(e.target.value.trim())}/>
             <Form.Label>client secret</Form.Label>
             <Form.Control type = "text" onChange = {e => setClientSecret(e.target.value.trim())}/>
           </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant = "primary" onClick = {_ => {
               if (clientSecret.length !== 0 && name.length !== 0) {
                 CardReaderProvider.add({
                  name: name,
                  clientSecret: clientSecret
                 })
                 setShow(false)
               }
            }}>Add</Button>
            <Button variant = "secondary" onClick = {_ => setShow(false)}>Close</Button>
         </Modal.Footer>
    </Modal>
}