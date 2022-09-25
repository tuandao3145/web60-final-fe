import { Col, Image, Row } from "antd";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function HomeCategory({ title }) {

    const data = useContext(ProductContext);
    const detail = data.allProduct;



    return (
        <div style={{ textAlign: "left", }}>
            <Row>
                <Col span={6}> <h2>{title?.name}</h2> </Col>
                <Col span={18}></Col>
            </Row>

            <Row style={{ gap: "2%"}}>
                {detail?.map(item => {
                    if (item.category._id == title?._id) {
                        return (
                                <Col>
                                    <Image src={item.imageMain} style={{ height: "200px"}} />
                                    <h4>{item.name}</h4>
                                    <h3> From {item.price}$</h3>
                                </Col>
                        )
                    }
                })}
            </Row>

        </div>
    )
}