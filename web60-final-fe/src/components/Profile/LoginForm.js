import { Button, Card, Checkbox, Form, Input, Row } from 'antd';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { login } from '../../model/user';

export const LoginForm = () => {

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const { setCurrentUser } = useContext(ProductContext);
	

	const handleLoginForm = async (event) => {
		event.preventDefault();

		if (email && password) {
			// tiến hành đăng nhập
			const user = await login(email, password);
			if (!user) {
				alert('Email or password is incorrect')
			} else { // nếu có user thì cập nhật trạng thái đăng nhập
				setCurrentUser(user); 
				navigate('/');
				alert('success')
			}
		}

	}

	return (
		<>
			<h1>Login</h1>
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
						name="remember"
						valuePropName="checked"
						wrapperCol={{
							offset: 8,
							span: 16,
						}}
					>
						<Link to='/forgotpassword'>Forgot your password?</Link>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 8,
							span: 16,
						}}
					>
						<Row>
							<Button onClick={handleLoginForm} type="primary" htmlType="submit">
								Sign in
							</Button>
						</Row>
						<Row style={{marginTop: "2%"}}>
							<Link to='/register'>Create Account</Link>
						</Row>
					</Form.Item>
				</Form>
			</Card>
		</>
	);
};
