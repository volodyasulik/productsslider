import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { LeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./DetailsStyle.css";

const antIcon = (
  <LoadingOutlined
    style={{
      top: "30%",
      left: "50%",
      fontSize: 80,
      position: "absolute",
    }}
    spin
  />
);

const DetailsPage = (props) => {
  const [productsData, setProductsData] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data: products } = await axios.get(
        `https://dummyjson.com/products/${props.id}`
      );

      setProductsData(products);
    };

    fetchProducts();
  }, [props.id]);
  const closePageHandler = () => {
    props.closePage();
  };
  return (
    <div className="detailsContainer">
      {productsData ? (
        <div>
          <div className="product">
            <div>
              <Button
                className="product-button"
                type="primary"
                onClick={closePageHandler}
                icon={<LeftOutlined />}
              />
            </div>
            <h2 className="product-title">{productsData.title}</h2>
            <img
              src={productsData.thumbnail}
              alt="product"
              className="product-image"
            />
            <span className="product-price">{`${productsData.price}$`}</span>
            <p className="product-description">{productsData.description}</p>
          </div>
        </div>
      ) : (
        <Spin indicator={antIcon} />
      )}
    </div>
  );
};

export default DetailsPage;
