import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Input, Button, List, Card, Row, Col, Space } from "antd";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface Record {
  full_name: string;
  national_id: string;
  email: string;
  phone_number: string;
  Predicted_score: number;
  Predicted_group: string;
}

const dummyData: Record[] = [
  {
    full_name: "Nguyễn Văn A",
    national_id: "0123456789",
    email: "nguyenvana@example.com",
    phone_number: "0901234567",
    Predicted_score: 720,
    Predicted_group: "B",
  },
  {
    full_name: "Trần Thị B",
    national_id: "0987654321",
    email: "tranthib@example.com",
    phone_number: "0912345678",
    Predicted_score: 650,
    Predicted_group: "C",
  },
];

const ExistingCustomer = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    full_name: "",
    national_id: "",
    email: "",
    phone_number: "",
  });
  const [customers, setCustomers] = useState<Record[]>(dummyData);

  const handleSearch = () => {
    const f = filter;
    const filtered = dummyData.filter(
      (item) =>
        (f.full_name ? item.full_name.includes(f.full_name) : true) &&
        (f.national_id ? item.national_id.includes(f.national_id) : true) &&
        (f.email ? item.email.includes(f.email) : true) &&
        (f.phone_number ? item.phone_number.includes(f.phone_number) : true),
    );
    setCustomers(filtered);
  };

  const columns: TableColumnsType<Record> = [
    { title: "Họ và tên", dataIndex: "full_name", key: "full_name" },
    { title: "Số CCCD", dataIndex: "national_id", key: "national_id" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Số điện thoại", dataIndex: "phone_number", key: "phone_number" },
  ];

  // removed an unrelated example `data` to avoid name collision and keep table bound to `customers` state
  const onChange: TableProps<Record>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Card className="text-left" title="Khách hàng hiện hữu">
        <Row gutter={16}>
          <Col span={6}>
            <Input
              placeholder="Họ và tên"
              value={filter.full_name}
              onChange={(e) =>
                setFilter({ ...filter, full_name: e.target.value })
              }
            />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Số CCCD"
              value={filter.national_id}
              onChange={(e) =>
                setFilter({ ...filter, national_id: e.target.value })
              }
            />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Email"
              value={filter.email}
              onChange={(e) => setFilter({ ...filter, email: e.target.value })}
            />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Số điện thoại"
              value={filter.phone_number}
              onChange={(e) =>
                setFilter({ ...filter, phone_number: e.target.value })
              }
            />
          </Col>
        </Row>
        <Space className="!w-full justify-end mb-4" style={{ marginTop: 16 }}>
          <Button
            type="primary"
            onClick={() => navigate("/lookup/existing/create")}
            className="bg-primary hover:!bg-primary-hover"
          >
            Thêm mới
          </Button>
        </Space>

        <Table<Record>
          columns={columns}
          dataSource={customers}
          onChange={onChange}
          rowKey={(record) => record.national_id}
        />
      </Card>
      {/* Nested routes (e.g. /lookup/existing/create) will render here */}
      <Outlet />
    </div>
  );
};

export default ExistingCustomer;
