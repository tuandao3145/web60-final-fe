import { Card, Col, Row, Space } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';

export const Footer = () => {
	return (
		<Card style={{ margin: "2%", background: "#ececec" }}>
			<Row>
				<Col span={12}>
					<Row>
						<h3> Quick Links</h3>
					</Row>
					<Row>
						<NavLink to='/Privacy' > Privacy Policy</NavLink>
					</Row>
					<Row>
						<NavLink to='/Refund'> Refund Policy</NavLink>
					</Row>
					<Row>
						<NavLink to='/Shipping'> Shipping Policy</NavLink>
					</Row>
					<Row>
						<NavLink to='/Term'> Term Of Service</NavLink>
					</Row>
				</Col>

				<Col span={12}>
					<Row>
						<h3> Join us on our Discord Community</h3>
					</Row>

					<Row>
						You could join our <a style={{ marginLeft: "1%", marginRight: "1%" }} href="https://discord.com/">Discord here </a> for Sale Annoucements
					</Row>
				</Col>
			</Row>

			<Row>
				<Col span={10}></Col>
				<Col>
					<Row>
						<Space>
							<Col> <a href="https://www.facebook.com/"><FacebookOutlined /> </a></Col>
							<Col> <a href="https://www.instagram.com/"><InstagramOutlined /></a></Col>
							<Col> <a href="https://www.youtube.com/"><YoutubeOutlined /></a></Col>
						</Space>
					</Row>
				</Col>
				<Col ></Col>
			</Row>
		</Card>
	);
};
