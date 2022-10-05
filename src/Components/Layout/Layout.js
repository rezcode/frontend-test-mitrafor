import style from "./Layout.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { Layout, Menu } from "antd";
const { Sider, Content } = Layout;

const LayoutApp = () => {
  return (
    <>
      <Layout className={style.wrapper}>
        <Sider>
          <Menu theme="dark">
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutApp;
