import { Button, Card, Row } from "antd";
import React, { useContext } from "react";
import { UserOutlined } from '@ant-design/icons';
import { logout } from "../../model/user";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export default function Profile() {

    const user = useContext(ProductContext);
    const navigate = useNavigate();
    console.log(user);

    const handleLogout = () => {
        logout();
        user.setCurrentUser('');
        navigate('/');
    }

    return (
        <Card>
            <Row>
                <h2> Account: {user.currentUser.email} </h2>
            </Row>
            <Row>
                <UserOutlined style={{marginTop: '1%'}} />
                <Button type="text" onClick={handleLogout}> Logout</Button>
            </Row>

        </Card>
    )
}