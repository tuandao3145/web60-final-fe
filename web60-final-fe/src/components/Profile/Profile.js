import { Button, Card, Row } from "antd";
import React, { useContext } from "react";
import { UserOutlined } from '@ant-design/icons';
import { logout } from "../../model/user";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export default function Profile() {

    const user = useContext(ProductContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        user.setCurrentUser('');
        navigate('/');
    }

    return (
        <Card>
            <Row>
                <h3> Account: {user.currentUser.email} </h3>
            </Row>
            
            <Row>
                <UserOutlined style={{ marginTop: '0.75%' }} />
                <Button type="text" onClick={handleLogout}> Logout</Button>
            </Row>

            <Row style={{marginTop: "2%"}}>
                <h5> Order history</h5>
            </Row>

            <Row>

            {       //render sp
                    user.currentUser.order && user.currentUser.order.length != 0
                        ? <>{user.currentUser.order.map(item => {
                            return(
                                <Card>

                                </Card>
                            )
                        })}</>
                        // nếu k có order thì render chưa có gì
                        : <><p>you haven't placed any orders yet</p></>
                }
            </Row>

        </Card>
    )
}