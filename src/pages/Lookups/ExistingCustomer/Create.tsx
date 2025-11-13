import React from "react";
import { Col, Row, Form, Input, InputNumber, Select, Card } from "antd";

const ExistCustomerCreate = () => {
  return (
    <>
      <Card title="Tạo tra cứu điểm tín dụng của khách hàng hiện hữu">
        <Form name="layout-multiple-horizontal" layout="horizontal">
          <Row className="justify-center" gutter={16}>
            <Col span={8}>
              <Form.Item
                layout="vertical"
                label="Họ và Tên"
                name="full_name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item
                layout="vertical"
                label="Số Căn cước công dân"
                name="national_id"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row className="justify-center" gutter={16}>
            <Col span={8}>
              <Form.Item
                layout="vertical"
                label="Địa chỉ email"
                name="email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item
                layout="vertical"
                label="Số điện thoại"
                name="phone_number"
                rules={[{ required: true, type: "number" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default ExistCustomerCreate;
