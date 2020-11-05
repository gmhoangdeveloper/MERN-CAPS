import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Upload,
  message,
  Image,
  Space,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Pictures from "./Image2";
function ModalProduct({ itemProduct }) {
  const [OpenandCloseModal, setOpenandCloseModal] = useState(false);
  const [fileList1, setupdateFileList1] = useState([]);
  const [fileList2, setupdateFileList2] = useState([]);
  const [form] = Form.useForm();
  //Text
  const [itemPropProduct, setitemPropProduct] = useState({});
  const handleSetValueState = () => {
    setitemPropProduct(itemProduct);
  };
  const textSubmit1 = () => {
    console.log("Text", itemPropProduct);
    // setitemPropProduct((prevStat) => ({ ...prevStat, itemProduct }));
  };
  useEffect(() => {
    handleSetValueState();
  }, []);
  //End Text

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const layout = {
    layout: "vertical",
    labelCol: {
      span: 22,
    },
    wrapperCol: {
      span: 22,
    },
  };

  const showModal = () => {
    setOpenandCloseModal(true);
  };

  const handleCancel = (e) => {
    setOpenandCloseModal(false);
  };
  const customeUpload1 = {
    multiple: false,
    beforeUpload: (file) => {
      console.log(file, "file");
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
        return;
      }
      return file.type === "image/png" && file.type === "image/jpeg";
    },
    onChange: (info) => {
      const fileNotImage = info.fileList.filter((file) => !!file.status);
      if (fileNotImage.length > 0) {
        setupdateFileList1([]);
      } else {
        let listImage = [...info.fileList];
        setupdateFileList1(listImage.slice(-1));
      }
    },
  };
  const customeUpload2 = {
    multiple: false,
    beforeUpload: (file) => {
      console.log(file, "file");
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
        return;
      }
      return file.type === "image/png" && file.type === "image/jpeg";
    },
    onChange: (info) => {
      const fileNotImage = info.fileList.filter((file) => !!file.status);
      if (fileNotImage.length > 0) {
        setupdateFileList2([]);
      } else {
        let listImage = [...info.fileList];
        setupdateFileList2(listImage.slice(-1));
      }
    },
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title={itemProduct.title}
        visible={OpenandCloseModal}
        onCancel={handleCancel}
        width="920px"
        footer={false}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Pictures />
                  <p>{itemPropProduct.title}</p>
                  <Form.Item
                    label="Name"
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Name!",
                      },
                    ]}
                  >
                    <Input value={itemPropProduct.title} />
                  </Form.Item>
                  <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input your description!",
                      },
                    ]}
                  >
                    <TextArea rows={4} defaultValue={itemProduct.description} />
                  </Form.Item>
                  <Form.Item
                    label="image1"
                    name="image1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Space direction="vertical">
                      <Image
                        src={itemProduct.image1}
                        width="100px"
                        height="100px"
                      />
                      <Upload
                        listType="picture"
                        {...customeUpload1}
                        fileList={fileList1}
                      >
                        <Button icon={<UploadOutlined />}>
                          Click to Upload
                        </Button>
                      </Upload>
                    </Space>
                  </Form.Item>
                  <Form.Item
                    label="image2"
                    name="image2"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Space direction="vertical">
                      <Image
                        src={itemProduct.image2}
                        width="100px"
                        height="100px"
                      />
                      <Upload
                        listType="picture"
                        {...customeUpload2}
                        fileList={fileList2}
                      >
                        <Button icon={<UploadOutlined />}>
                          Click to Upload
                        </Button>
                      </Upload>
                    </Space>
                  </Form.Item>{" "}
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  {" "}
                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input defaultValue={itemProduct.price} />
                  </Form.Item>{" "}
                  <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input defaultValue={itemProduct.quantity} />
                  </Form.Item>
                  <Form.Item
                    label="Size"
                    name="size"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input defaultValue={itemProduct.size} />
                  </Form.Item>{" "}
                  <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input defaultValue={itemProduct.status} />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Button onClick={() => textSubmit1()}>Submit</Button>
      </Modal>
    </>
  );
}

export default ModalProduct;
