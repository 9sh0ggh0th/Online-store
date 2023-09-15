import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { deleteBrand } from "../../http/deviceApi";

const DeleteBrand = ({show, onHide}) => {
  const delBrand = () => {
    deleteBrand({name: value}).then(data =>
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
          Delete brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Enter the brand name"}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={delBrand}>Delete</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default DeleteBrand;