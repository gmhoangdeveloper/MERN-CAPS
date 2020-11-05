import {
  Button,
  Image,
  Input,
  Layout,
  Menu,
  Popconfirm,
  Space,
  Table,
} from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import listProductAdmin from "../../../actions/Admin/productAdminAction";
// import { listProducts } from "../actions/productActions";
import { deleteProducts, listProducts } from "../../../actions/productActions";
import SiderLeft from "../../../components/Admin/SiderLeft";
import ModalProduct from "./ModalProduct";
import { Avatar } from "@material-ui/core";
const { Search } = Input;
const { Header, Footer, Sider, Content } = Layout;
function AllProduct(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const [state, setstate] = useState({ collapsed: false });
  const [filtered, setfiltered] = useState(null);

  const onCollapse = () => {
    // console.log("!stat e.collapsed", !state.collapsed);
    setstate({ collapsed: !state.collapsed });
  };
  // const [search, setSearch] = useState(false);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "300px",
    },
    {
      title: "Image1",
      dataIndex: "image1",
      render: (theImageURL) => (
        <>
          <Image
            alt={theImageURL}
            src={theImageURL}
            width="120px"
            height="120px"
          />
        </>
      ),
    },
    {
      title: "Image2",
      dataIndex: "image2",
      render: (theImageURL) => (
        <Image
          alt={theImageURL}
          src={theImageURL}
          width="120px"
          height="120px"
        />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <>
          <Space size="middle">
            <ModalProduct itemProduct={record} />
            <Popconfirm
              title={`Are you sure delte ${record.title} ？`}
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                dispatch(deleteProducts(record._id));
              }}
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </>
      ),
    },
  ];

  function handlerSearch(searchString) {
    const filtered = productList.products.filter((products) =>
      Object.keys(products).some((search) =>
        String(products[search])
          .toLowerCase()
          .includes(searchString.toLowerCase())
      )
    );
    setfiltered(filtered);
  }

  return (
    <>
      {console.log("Two", filtered)}
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
          <SiderLeft></SiderLeft>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Search onSearch={handlerSearch} enterButton />
            <Table
              columns={columns}
              size="middle"
              pagination={{ pageSize: 5 }}
              dataSource={filtered === null ? products : filtered}
              rowKey="_id"
            />
            {console.log(filtered, "table")}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default AllProduct;
