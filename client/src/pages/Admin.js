import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType"
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import DeleteBrand from "../components/modals/DeleteBrand";
import DeleteType from "../components/modals/DeleteType";

const Admin = () => {
 const [typeVisible, setTypeVisible] = useState(false);
 const [brandVisible, setBrandVisible] = useState(false);
 const [deviceVisible, setDeviceVisible] = useState(false);
 const [delTypeVisible, setDelTypeVisible] = useState(false);
 const [delBrandVisible, setDelBrandVisible] = useState(false);
 const [delDeviceVisible, setDelDeviceVisible] = useState(false);

    return(
		<Container className="d-flex flex-column">

            {/* Add Functions */}

            <Button
                onClick={() => setTypeVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Add type
            </Button>

            <Button
                onClick={() => setBrandVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Add brand
            </Button>

            <Button
                onClick={() => setDeviceVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Add device
            </Button>

            {/* Delete Functions */}

            <Button
                onClick={() => setDelTypeVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Delete Type
            </Button>

            <Button
                onClick={() => setDelBrandVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Delete Brand
            </Button>

            <Button
                onClick={() => setDelDeviceVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Delete Device
            </Button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <DeleteType show={delTypeVisible} onHide={() => setDelTypeVisible(false)}/>
            <DeleteBrand show={delBrandVisible} onHide={() => setDelBrandVisible(false)}/>



        </Container>
    );
};

export default Admin;