import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Layout, Menu, Breadcrumb, Image } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SiderLeft from "../../components/Admin/SiderLeft";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
function Dashboard(props) {
  const [state, setstate] = useState({ collapsed: false });
  const onCollapse = () => {
    // console.log("!state.collapsed", !state.collapsed);
    setstate({ collapsed: !state.collapsed });
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
          <SiderLeft></SiderLeft>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            ></div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
