import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.jpg';
import basket from '../assets/basket.jpg'
import { useNavigate } from "react-router-dom";
import { BASKET_ROUTE, DEVICE_ROUTE } from "../utils/consts";
import { fetchOneDevice } from "../http/deviceApi";


const DeviceItem = observer(({ device }) => {
const navigate = useNavigate();

const devToBasket = () => {
    fetchOneDevice().then(data => device.selectedDevice)
    alert('added to your basket')
}


    return (
        <Col md={3} className={"mt-3"} >
            <Card style={{ width: 150, height: 225, cursor: 'pointer' }}
            >
                <Image
                    onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
                    width={145}
                    height={220}
                    src={process.env.REACT_APP_API_URL + device.img}>
                </Image>

                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star} />
                        <Image onClick={devToBasket} width={18} height={18} src={basket} />
                    </div>
                </div>

                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
});

export default DeviceItem;