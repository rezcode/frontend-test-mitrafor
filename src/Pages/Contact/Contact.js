import React, { Component } from "react";
import "./Contact.css";
import { Row, Col } from "antd";
import contactUsImg from "../../Assets/Images/lettering-lettering-contact-us-with-hand.gif";
import ContactCards from "../../Components/ContactCards/ContactCards";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Row style={{ marginBottom: "30px" }}>
          <Col span={12} offset={6}>
            <div className="contact-img">
              <img src={contactUsImg} alt="Contact-Us" />
            </div>
            <h2 className="contact-title">We'd Love to Hear From You</h2>
          </Col>
        </Row>
        <ContactCards />
      </>
    );
  }
}
