import { Button, Card, Row } from "antd";
import React, { useContext } from "react";
import { UserOutlined } from '@ant-design/icons';
import { logout } from "../../model/user";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export default function Profile() {

    const {currentUser, setCurrentUser} = useContext(ProductContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setCurrentUser('');
        navigate('/');
    }
    const order = currentUser.order
    console.log(order);
    
    // const result = order?.map(item => {
    //     return item.items
    // })
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
                <h5> Order history: {order?.length}</h5>
            </Row>

            <div>

                {       //render sp
                   order && order.length != 0
                        ? <>{order.map(item => {
                            return (
                                <Row style={{ margin: "2%", textAlign:"left" }}>
                                    <Card >
                                        <p> Shipping: {`${item.shippingAddress.address}, ${item.shippingAddress.city}, ${item.shippingAddress.district} `}</p>
                                        <p> Price: {item.totalPrice}</p>
                                    </Card>
                                </Row>
                            )
                        })}</>
                        // nếu k có order thì render chưa có gì
                        : <><p>you haven't placed any orders yet</p></>
                }
            </div>

        </Card>
    )
}