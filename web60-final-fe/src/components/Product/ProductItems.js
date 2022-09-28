// CARD PRODUCT 
// TÙNG
import { Card,  } from "antd";
import React from "react";

const { Meta } = Card;

function ProductItems({ product }) {

  
    
  return (
   

      <Card
        className="img-hover-zoom"
        hoverable
        style={{
          width: '90%',
          textAlign: 'start',
          marginLeft: '20px' ,
          marginBottom:'10px',
          borderRadius: '15px',
          border: 'none'
        }}
        cover={<img alt="" src={product.imageMain} />}
      >
       <strong> <Meta className="product-name" title={product.name} /> </strong>

        <h3>From {product.price} $</h3>
      </Card>
    

    
  );
}

export default ProductItems;
