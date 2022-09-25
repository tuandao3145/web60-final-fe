import { Button, Card, Form, Input, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../model/user';


export const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
       register(email, password);
       navigate('/');
       alert('success')
    }

    return (
        <>
            <h1>Register</h1>
            <Card style={{ textAlign: "left", width: "50%", marginLeft: "25%", marginRight: "25%" }} size="middle">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input onChange={(event => setEmail(event.target.value))} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={(event => setPassword(event.target.value))} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Row>
                            <Button onClick={handleRegister} type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Row>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
};
