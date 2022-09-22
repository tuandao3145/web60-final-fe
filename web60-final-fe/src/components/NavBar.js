import React, { useContext } from "react";
import { Breadcrumb, Card, Col, Dropdown, Menu, Row, Space } from 'antd';
import { DownOutlined, SearchOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export const NavBar = () => {

	const menu = (
		<Menu
			items={[
				{
					label: <NavLink to='/KeebTypingProducts'>KeebTyping products</NavLink>,
					key: '0',
				},
				{
					label: <NavLink to='/AngryMiaoProducts'>Viendi Products</NavLink>,
					key: '1',
				},
				// {
				// 	type: 'divider',
				// },
				{
					label: <NavLink to='/ViendiProducts'>Nuxroskb Products</NavLink>,
					key: '3',
				},
			]}
		/>
	);

	const margin = {
		marginTop: 20,
	}

	return (
		<div>
			<>
				<Card style={{ background: "#ececec" }}>
					<Row>
						<Col span={2}>
							<NavLink to="/">
								<img
									height={50}
									width={'50%'}
									src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/logo_9036676e-1709-4680-9f5a-97e5d10a93ae_90x.png?v=1630939482"
								/>
							</NavLink>
						</Col>

						<Col span={18} style={margin}>
							<Breadcrumb separator="">
								<Space size={"middle"}>
									<Breadcrumb.Item>
										<NavLink to="/"> Home </NavLink>
									</Breadcrumb.Item>
									<Breadcrumb.Item>
										<Dropdown overlay={menu} trigger={['click']}>
											<a onClick={(e) => e.preventDefault()}>
												<Space>
													Keyboard Kit
													<DownOutlined />
												</Space>
											</a>
										</Dropdown>
									</Breadcrumb.Item>

									<Breadcrumb.Item>
										<a href="https://discord.com/">Discord Sever</a>
									</Breadcrumb.Item>
									<Breadcrumb.Item>
										<NavLink to="/product">Catalog</NavLink>
									</Breadcrumb.Item>
									<Breadcrumb.Item>
										<NavLink>About us</NavLink>
									</Breadcrumb.Item>
								</Space>
							</Breadcrumb>
						</Col>

						<Col style={margin}>
							<Row>
								<Space size="middle">
									<h3><SearchOutlined /> </h3>
									<NavLink to="/loginform">
										<h3><UserOutlined /> </h3>
									</NavLink>
									<NavLink to="/cart">
										<h3><ShoppingOutlined /> </h3>
									</NavLink>
								</Space>
							</Row>
						</Col>
					</Row>
				</Card>
			</>
		</div>
	)
};
