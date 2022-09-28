// LIST PRODUCTS
// TÙNG
import React, { useContext, useState } from "react";
import { List, Button, Dropdown, Menu, Space, Checkbox } from "antd";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { DownOutlined } from "@ant-design/icons";
import ProductItems from "./ProductItems";
import { ProductContext } from "../../context/ProductContext";
import { Footer } from "../Footer";

function ProductList() {
  const {
    products,
    setInStock,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    setFieldSort,
    setTypeSort,
    sort,
    setSort,
  } = useContext(ProductContext);
  const [inStockChecked, setInStockChecked] = useState(false);
  const [outStockChecked, setOutStockChecked] = useState(false);

  const handlePriceFrom = (e) => {
    setPriceFrom(e.target.value);
  };
  const handlePriceTo = (e) => {
    setPriceTo(e.target.value);
  };

  const inStockChange = (e) => {
    const name = e.target.name;
   
    if (name === "inStock") {
      setInStockChecked(true);
      setOutStockChecked(false);
      setInStock(1);
    }
    if (name === "outStock") {
      setOutStockChecked(true);
      setInStockChecked(false);
      setInStock(2);
    }
  };

  const handleReset = () => {
    setInStockChecked(false);
    setOutStockChecked(false);
    setInStock(0);
    setPriceFrom("");
    setPriceTo("");
  };

  const handleFieldSort = (e) => {
    setSort(e.target.value);
  };

  let arr = [];
  arr = sort.split(" ");
  console.log(arr);
  setFieldSort(arr[0]);
  setTypeSort(arr[1]);

  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="text" onClick={handleReset}>
          Reset
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Checkbox
          name="inStock"
          checked={inStockChecked}
          onChange={inStockChange}
        >
          In Stock
        </Checkbox>
      </Menu.Item>
      <Menu.Item>
        <Checkbox
          name="outStock"
          checked={outStockChecked}
          onChange={inStockChange}
        >
          Out Stock
        </Checkbox>
      </Menu.Item>
      <Menu.Item value></Menu.Item>
    </Menu>
  );

  const menu2 = () => {
    return (
      <div className="box-input">
        <Button type="text" onClick={handleReset}>
          Reset
        </Button>
        <div className="price-input">
          <InputGroup className="mb-1 mr-4">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              value={priceFrom}
              onChange={handlePriceFrom}
              placeholder="From"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              value={priceTo}
              onChange={handlePriceTo}
              placeholder="To"
            />
          </InputGroup>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="Product-page-title">Product</h1>
      <div className="filter-menu">
        <div className="dropdown">
          <div className="dropdown-stock-price">
            <strong>
              <span>Filter:</span>
            </strong>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              style={{ marginBottom: 40 }}
            >
              <div onClick={(e) => e.preventDefault()}>
                <Space>
                  Availability
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>

            <Dropdown overlay={menu2()} trigger={["click"]}>
              <div onClick={(e) => e.preventDefault()}>
                <Space>
                  Price
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>
          </div>
          <div className="sort">
            <strong>
              <span>Sort By:</span>
            </strong>
            <select
              placeholder="Sort By"
              value={sort}
              style={{ width: 170, marginLeft: 40, outline: 'none' }}
              onChange={(e) => handleFieldSort(e)}
            >
              <option value="name asc">Alphabetically, A-Z</option>
              <option value="name desc">Alphabetically, Z-A</option>
              <option value="price asc">Price, low to high</option>
              <option value="price desc">Price, high to low</option>
            </select>
          </div>
        </div>
      </div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={products}
        renderItem={(product) => (
          <List.Item>
            <ProductItems product={product} />
          </List.Item>
        )}
      ></List>
      <Footer/>
    </div>
  );
}

export default ProductList;
