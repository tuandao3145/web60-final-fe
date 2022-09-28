import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

export const Annoucements = () => {

	const { Meta } = Card
	
	return (
			<div style={{ textAlign: "left", }}>
				<Row >
					<Col span={4}> <h3>Annoucements</h3> </Col>
					<Col span={20}></Col>
				</Row>

				<Row >
					<Col span={8}>
						<Link to="/Annouce_1">
							<Card
								style={{ width: '80%' }}
								cover={
									<img src="https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/dracu_hogwig_350x.jpg?v=1663305431" />
								}>

								<Meta
									title='Dracula Hogwig Raffle Sale'
									description="Hogwig is formed by combining Hogwarts & Hedwig. Inspired by the magical world, the Hogwarts owls will bring you the offer letters for a new school year. Hogwig also be..." />
							</Card>
						</Link>
					</Col>

					<Col span={8}>
						<Link to="/Annouce_2">
							<Card
								style={{ width: '80%' }}
								cover={
									<img src="https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/2_-_RBCNONH_350x.jpg?v=1662729776" />
								}>

								<Meta
									title='Dracula Herold Raffle Sale'
									description="I'm Herold - half Thestrals - half Unicorn - Half of me is death , half of me is life..." />
							</Card>
						</Link>
					</Col>
					<Col span={8}>
						<Link to="/Annouce_3">
							<Card
								style={{ width: '80%' }}
								cover={
									<img src="https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/c9QD2mM_350x.jpg?v=1660998132" />
								}>

								<Meta
									title='Noface Herold Raffle'
									description="I'm Herold - half Thestrals - half Unicorn - Half of me is death , half of me is life..." />
							</Card>
						</Link>
					</Col>
				</Row>
			</div>
	)
};
