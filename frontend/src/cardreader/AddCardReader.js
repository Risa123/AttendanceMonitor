import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

export default function AddCardReader({show,setShow}) {
    return <Modal show = {show}>
         <Modal.Header>
            <Modal.Title>Add Card Reader</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form>
             <Form.Label>name</Form.Label>
             <Form.Control type = "text"/>
             <Form.Label>client secret</Form.Label>
             <Form.Control type = "text"/>
           </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant = "primary" onClick = {_ => setShow(false)}>Add</Button>
            <Button variant = "secondary" onClick = {_ => setShow(false)}>Close</Button>
         </Modal.Footer>
    </Modal>
}