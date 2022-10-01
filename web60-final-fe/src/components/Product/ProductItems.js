// CARD PRODUCT 
// TÙNG
import { Card  } from "antd";
import React, {useContext} from "react";
import { ProductContext } from "../../context/ProductContext";
import Button from 'react-bootstrap/Button';
const { Meta } = Card;

function ProductItems({ product }) {

  const {addToCart} = useContext(ProductContext)
    
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

        <h5>From {product.price} $</h5>
        <Button variant="primary" onClick={()=>addToCart(product)}>Buy</Button>
      </Card>
    

    
  );
}

export default ProductItems;
