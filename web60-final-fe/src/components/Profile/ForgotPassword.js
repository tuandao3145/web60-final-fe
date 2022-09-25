import { Button, Card, Form, Input, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const ForgotPassword = () => {

    const [email, setEmail] = useState('');


    return (
        <>
            <h1>Reset your password</h1>
            <h4>We will send you an email to reset your password </h4>
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
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Row>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Row>
                        <Row style={{ marginTop: "2%" }}>
                            <Link to='/login' >Cancel</Link>
                        </Row>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
};
