import React, { Component } from "react";
import { Row, Col } from "antd";
import aboutImg from "../../Assets/Images/bloom-woman-thinking-about-the-problem.gif";
import AboutDescription from "../../Components/AboutDescription/AboutDescription";

export default class About extends Component {
  render() {
    return (
      <>
        <Row align="middle">
          <Col span={9} style={{ textAlign: "center" }}>
            <div className="about-img">
              <img src={aboutImg} alt="Contact-Us" />
            </div>
          </Col>
          <Col span={12}>
            <AboutDescription />
          </Col>
        </Row>
      </>
    );
  }
}
