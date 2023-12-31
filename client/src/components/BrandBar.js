import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";


const BrandBar = observer (() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
        {device.brands.map(brand =>
            <Card
                style={{cursor:'pointer', width: 125, overflow: 'hidden'}}
                key={brand.id}
                className="p-3"
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            >
                {brand.name}
            </Card>
        )}
    </Row>
    );
});

export default BrandBar;