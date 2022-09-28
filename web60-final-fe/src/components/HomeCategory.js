import { Card, Col, Image, Row } from "antd";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function HomeCategory({ title }) {

    const data = useContext(ProductContext);
    const detail = data.data?.allProduct;



    return (
        <div style={{ textAlign: "left", }}>
            <Row>
                <Col span={6}> <h3>{title?.name}</h3> </Col>
                <Col span={18}></Col>
            </Row>

            <Row style={{ gap: "2%" }}>
                {detail?.map(item => {
                    if (item.category._id == title?._id) {
                        return (
                            <Card>
                                <Col>
                                    <Image src={item.imageMain} style={{ height: "150px" }} />
                                    <h4>{item.name}</h4>
                                    <h5> From {item.price}$</h5>
                                </Col>
                            </Card>
                        )
                    }
                })}
            </Row>

        </div>
    )
}