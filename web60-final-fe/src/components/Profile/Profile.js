import { Button, Card, Row, Image, Col } from "antd";
import React, { useContext } from "react";
import { UserOutlined } from '@ant-design/icons';
import { logout } from "../../model/user";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export default function Profile() {

    const { currentUser, setCurrentUser } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setCurrentUser('');
        navigate('/');
    }
    const order = currentUser.order
    // console.log(order);

    const result = order?.map(item => {
        return item.items[0].variant
    })
    // console.log(result);




    return (
        <Card>
            <Row>
                <h3> Account: {currentUser.email} </h3>
            </Row>

            <Row>
                <UserOutlined style={{ marginTop: '0.75%' }} />
                <Button type="text" onClick={handleLogout}> Logout</Button>
            </Row>

            <Row style={{ marginTop: "2%" }}>
                <h5> Total Order: {order?.length}</h5>
            </Row>

            <div>

                {       //render sp
                    order && order.length != 0
                        ? <>{order.map(item => {
                            return (
                                <Card style={{ margin: "2%", textAlign: "left" }}>
                                    <Row>
                                        <Col span={12} >
                                            <Image width={200} src={item.items[0].variant.image} />
                                        </Col>

                                        <Col>
                                            <p> Quantity: {item.items[0].quantity} </p>
                                            <p> Status: {item.status} </p>
                                            <p> Price: {item.totalPrice} $</p>
                                        </Col>
                                    </Row>
                                </Card>
                            )
                        })}</>
                        // nếu k có order thì render chưa có gì
                        : <><p>you haven't placed any orders yet</p></>
                }
            </div>

        </Card>
    )
}