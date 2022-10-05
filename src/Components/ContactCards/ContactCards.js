import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

export default class ContactCards extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <Card
            hoverable
            style={{
              width: "95%",
              textAlign: "center",
            }}
          >
            <MailOutlined style={{ fontSize: "80px", marginBottom: "15px" }} />
            <h2>Send us and email</h2>
            <h4>
              You'll get notification
              <br />
              from us!
            </h4>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            hoverable
            style={{
              width: "95",
              textAlign: "center",
            }}
          >
            <PhoneOutlined style={{ fontSize: "80px", marginBottom: "15px" }} />
            <h2>1810000000</h2>
            <h4>
              7am - 11pm <br /> 7 days a week
            </h4>
          </Card>
        </Col>
      </Row>
    );
  }
}
