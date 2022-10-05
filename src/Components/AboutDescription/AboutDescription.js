import React, { Component } from "react";
import { Descriptions } from "antd";

export default class AboutDescription extends Component {
  render() {
    return (
      <>
        <Descriptions title="About Us" style={{ verticalAlign: "middle" }}>
          <Descriptions.Item>
            For you to achieve your goals, visitors must first achieve theirs.{" "}
            <br /> Our unique global perspective makes it possible to see
            connections that others cannot and to bring innovations to market
            that make life easier for customers. In addition we’re building
            strategic partnerships through equity investments to support our
            core businesses.
          </Descriptions.Item>
        </Descriptions>

        <Descriptions title="Store Address">
          <Descriptions.Item label="UserName">AnyStore</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Postal Code">9022</Descriptions.Item>

          <Descriptions.Item label="Address">
            Boulevard Street, Panakkukang Mas Complex, Makassar, Makassar City,
            South Sulawesi.
          </Descriptions.Item>
        </Descriptions>
      </>
    );
  }
}
