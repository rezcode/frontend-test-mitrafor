import React, { Component } from "react";
import products from "../../data.json";
import { Form, Input, Button, Table } from "antd";
import { useNavigate } from "react-router-dom";

class Home extends Component {
  state = {
    data: products,
    search: "",
  };

  columns = [
    {
      title: "#",
      key: "index",
      render: (text, record) => this.state.data.indexOf(record) + 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "20%",
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "40%",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      width: "10%",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      width: "10%",
    },
  ];

  onChange = (pagination) => {
    console.log("params", pagination);
  };

  handleSearch = () => {
    const filterProduct = products.filter((entry) =>
      entry.title.toLowerCase().includes(this.state.search)
    );
    this.setState({ data: filterProduct });
  };

  navigateDetailProduct = (e) => {
    this.props.navigate(`/product-detail/${e.id}`);
  };

  render() {
    return (
      <>
        <h2>Products</h2>
        <Form layout="inline" style={{ marginBottom: "15px" }}>
          <Form.Item style={{ width: "40%" }}>
            <Input
              type="text"
              placeholder="type product name..."
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.handleSearch}
            >
              Find
            </Button>
          </Form.Item>
        </Form>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          onChange={this.onChange}
          onRow={(e) => {
            return {
              onClick: () => {
                this.navigateDetailProduct(e);
              },
            };
          }}
        />
      </>
    );
  }
}

export function APPWithRouter(props) {
  const navigate = useNavigate();
  return <Home navigate={navigate} />;
}
export default APPWithRouter;
