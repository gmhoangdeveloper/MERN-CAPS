import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
function SiderLeft(props) {
  return (
    <>
      <div className="logoadmin_Sider">
        <span>
          <img
            src="https://app.recruitery.co/assets/img/logo.png"
            width="90%"
          />
        </span>
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/admin/dashboard"> Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="orderdetail" icon={<PieChartOutlined />}>
          <Link to="/admin/orderdetail"> Đơn Hàng</Link>
        </Menu.Item>
        <SubMenu key="category" icon={<UserOutlined />} title="Danh Mục">
          <Menu.Item key="1">Tất Cả Danh Mục</Menu.Item>
          <Menu.Item key="2">Thêm Mới Danh Mục</Menu.Item>
        </SubMenu>
        <SubMenu key="product" icon={<TeamOutlined />} title="Sản Phẩm">
          <Menu.Item key="3">
            <Link to="/admin/products">Tất Cả Sản Phẩm</Link>
          </Menu.Item>
          <Menu.Item key="4">Thêm Mới Sản Phẩm</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}

export default SiderLeft;
