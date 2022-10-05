import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProductDetail.css";
import { Col, Row, PageHeader } from "antd";
import "swiper/css";
import "swiper/css/effect-cards";
import { useNavigate, useParams } from "react-router-dom";
import { EffectCards } from "swiper";

import data from "../../data.json";

export default function ProductDetail() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <Row>
        <PageHeader
          className="site-page-header"
          onBack={() => navigate("/")}
          title="Product Detail"
        />
      </Row>
      <Row>
        <Col span={12}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {data[params.id - 1]?.images?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card-swiper">
                  <img src={item} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col span={12}>
          <div className="detail-information">
            <h2>{data[params.id - 1]?.title}</h2>
            <p>{data[params.id - 1]?.description}</p>
            <p>Category : {data[params.id - 1]?.category}</p>
            <p>Brand : {data[params.id - 1]?.brand}</p>
            <p>Price : $ {data[params.id - 1]?.price}</p>
            <p>Deiscount : {data[params.id - 1]?.discountPercentage} %</p>
            <p>Stocks available : {data[params.id - 1]?.stock} </p>
            <p>Rating : {data[params.id - 1]?.stock} </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
