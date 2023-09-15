import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { deleteType } from "../../http/deviceApi";

const DeleteType = ({show, onHide}) => {
  const delType = () => {
    deleteType({name: value}).then(data =>
      setValue('')
    )
    onHide()
  }
  const [value, setValue] = useState('')
return(
		<Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
              placeholder={"Enter the type name"}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={delType}>Delete</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default DeleteType;