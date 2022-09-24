import React from "react";
import { Card, Col, Row } from "antd";

export default function UniqueStyling() {

    const { Meta } = Card

    return (
        <div style = {{ textAlign: "left", }}>
            <Row >
                <Col span={6}> <h2>Unique Styling Wristrest</h2> </Col>
                <Col span={18}></Col>
            </Row>

            <Row>
                <Col span={8}>
                    <Card
                        style={{ width: '80%' }}
                        cover={
                            <img src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/3_-_VubQ3nq_85247141-af0b-495d-96c8-142ed58e380b_550x.jpg?v=1621409673" />
                        }>

                        <Meta
                            title='Treasure Wristrest Series'
                            description="Treasure 12 wrist rest series could hold up to 12 artisans and also provides a perfect surface for typing, especially with high profile keycap. " />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card
                        style={{ width: '80%' }}
                        cover={
                            <img src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/3_-_zIhWFUp_550x.jpg?v=1619195355" />
                        }>

                        <Meta
                            title='Samurai Wristrest'
                            description="Created by our talented artist - dasorevie , these Samurai themed wooden wrist-rests were carefully processed with high quality decal on top. And then the whole item was clear coated with resin to add protection from hand sweat. " />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card
                        style={{ width: '80%' }}
                        cover={
                            <img src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/8_-_5NZ54Cn_550x.jpg?v=1622979646" />
                        }>

                        <Meta
                            title='No Internet Dino Wristrest'
                            description="Dino lost his internet for the second time! He then embark on a quest to bring it back and went through some of the big guys fighting. However he doesn't mind their business. Be like Dino. " />
                    </Card>
                </Col>

            </Row>
        </div>
    )
}