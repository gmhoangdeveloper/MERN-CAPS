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
import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import SiderLeft from "../../../components/Admin/SiderLeft";
import OrderDetailGetAll from "../../../actions/Admin/orderdetailAction";
import { useDispatch } from "react-redux";
import { deleteProducts, listProducts } from "../../../actions/productActions";
import { bindActionCreators } from "redux";

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;
class OrderDetailAdmin extends Component {
  state = {
    collapsed: false,
    filtered: null,
  };
  // const [state, setstate] = useState({ collapsed: false });
  // // const { account, userordercart } = useSelector((state) => state.myaccount);
  // const dispatch = useDispatch();
  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  // useEffect(() => {
  //   dispatch(OrderDetailGetAll());
  // }, []);
  componentDidMount() {
    // console.log("RUN action", cart);
    // console.log("cart", cart, onDeleteProductInCart);

    this.props.onDeleteProductInCart();
    
  }
  render() {
    var { products } = this.props.productList;
    function handlerSearch(searchString) {
      const filtered = this.props.productList.products.filter((products) =>
        Object.keys(products).some((search) =>
          String(products[search])
            .toLowerCase()
            .includes(searchString.toLowerCase())
        )
      );
      // setfiltered(filtered);
    }
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
              {/* <ModalProduct itemProduct={record} /> */}
              <Popconfirm
                title={`Are you sure delte ${record.title} ？`}
                okText="Yes"
                cancelText="No"
                // onConfirm={() => {
                //   dispatch(deleteProducts(record._id));
                // }}
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
    const onCollapse = () => {
      // console.log("!stat e.collapsed", !state.collapsed);
      this.setState({ collapsed: !this.state.collapsed });
    };
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={onCollapse}
          >
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
                dataSource={
                  this.state.filtered === null ? products : this.state.filtered
                }
                rowKey="_id"
              />
              {/* {console.log(filtered, "table")} */}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: () => {
      dispatch(listProducts());
    },
  };
};

const dispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onDeleteProductInCart: listProducts,
    },
    dispatch
  );

export default connect(mapStateToProps, dispatchToProps)(OrderDetailAdmin);
