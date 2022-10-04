import { Button, Card, Form, Input, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../model/user';


export const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    //validate
    const validate = (email, password) => {
        if (email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) && password.lenght >=6 ) {
            alert('success');
            navigate('/');
            return
        } else {
            alert('please input correct email and password must have at least 6 characters')
        }
    };


    const handleRegister = (event) => {
        event.preventDefault();
        validate(email, password)
        register(email, password);
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
