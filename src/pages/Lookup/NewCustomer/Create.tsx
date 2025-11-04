import React from 'react';
import { Col, Row, Form, Input, InputNumber, Select, Card } from 'antd';

const NewCustomerCreate = () => {
    return (
        <>
            <Card title="Tạo tra cứu điểm tín dụng của khách hàng mới">
                <Form name="layout-multiple-horizontal" layout="horizontal">
                    <Row className="justify-center" gutter={16}>
                        <Col span={8}>
                            <Form.Item layout="vertical" label="Họ và Tên" name="full_name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8} offset={2}>
                            <Form.Item layout="vertical" label="Số Căn cước công dân" name="national_id" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="justify-center" gutter={16}>
                        <Col span={8}>
                            <Form.Item layout="vertical" label="Địa chỉ email" name="email" rules={[{ required: true, type: 'email' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8} offset={2}>
                            <Form.Item layout="vertical" label="Số điện thoại" name="phone_number" rules={[{ required: true, type: 'number' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="justify-center" gutter={16}>
                        <Col span={8}>
                            <Form.Item layout="vertical" label="Thu nhập 12 tháng" name="income" rules={[{ required: true, type: 'number' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8} offset={2}>
                            <Form.Item layout="vertical" label="Tiết kiệm 12 tháng" name="savings" rules={[{ required: true, type: 'number' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="justify-center" gutter={16}>
                        <Col span={8}>
                            <Form.Item layout="vertical" label="Tổng nợ hiện tại " name="debt" rules={[{ required: true, type: 'number' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8} offset={2}>
                            <Form.Item layout="vertical" label="Có người phụ thuộc hay không" name="debt" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Có người phụ thuộc hay không"
                                    defaultValue={0}
                                    options={[
                                        { label: 'Yes', value: 1 },
                                        { label: 'No', value: 0 },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="justify-center" gutter={16}>
                        <Col span={8}>
                            <Form.Item layout="vertical" label="Có vay thế chấp hay không" name="vertical" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Có vay thế chấp hay không"
                                    defaultValue={0}
                                    options={[
                                        { label: 'Yes', value: 1 },
                                        { label: 'No', value: 0 },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8} offset={2}>
                            <Form.Item layout="vertical" label="Có tài khoản tiết kiệm hay không" name="vertical2" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Có tài khoản tiết kiệm hay không"
                                    defaultValue={0}
                                    options={[
                                        { label: 'Yes', value: 1 },
                                        { label: 'No', value: 0 },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="" gutter={16}>
                        <Col span={8} offset={3}>
                            <Form.Item layout="vertical" label="Có thẻ tín dụng hay không" name="vertical" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Có thẻ tín dụng hay không"
                                    defaultValue={0}
                                    options={[
                                        { label: 'Yes', value: 1 },
                                        { label: 'No', value: 0 },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    );
};

export default NewCustomerCreate;