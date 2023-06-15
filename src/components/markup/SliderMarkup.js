import { Carousel, Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../productComponents/cardComponent/Card";
import DetailsPage from "../productComponents/detailsComponent/Details";

const contentStyle = {
  height: "550px",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  background: "#364d79",
};

const SliderMarkup = () => {
  const [productsData, setProductsData] = useState(null);

  const [detaildId, seDetailsId] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const {
        data: { products },
      } = await axios.get("https://dummyjson.com/products?limit=6");

      setProductsData(products);
      console.log(products.length);
    };

    fetchProducts();
  }, []);

  const detailsPageHandler = (id) => {
    if (id) {
      seDetailsId(id);
    } else {
      seDetailsId(null);
    }
  };

  return (
    <div>
      {detaildId ? (
        <DetailsPage id={detaildId} closePage={detailsPageHandler} />
      ) : (
        <Row>
          <Col span={3} />
          <Col span={18}>
            <Carousel autoplay style={contentStyle}>
              {productsData &&
                productsData.map((el) => (
                  <ProductCard
                    title={el.title}
                    id={el.id}
                    descriptions={el.description}
                    image={el.thumbnail}
                    open={detailsPageHandler}
                    key={el.id}
                  />
                ))}
            </Carousel>
          </Col>
          <Col span={3} />
        </Row>
      )}
    </div>
  );
};

export default SliderMarkup;
