import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Space,
  Table,
  Typography,
  message,
} from "antd";
import { Bell, Download, Eye, Filter, Menu, Search } from "lucide-react";
import { useGetAllDonateQuery } from "../../../redux/features/donate/DonateApi";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useGetmeQuery } from "../../../redux/features/auth/authApi";

const { Title } = Typography;

const getStatusBadge = (status: string) => {
  const colorMap: Record<string, string> = {
    Completed: "green",
    Pending: "gold",
    Failed: "red",
  };
  return (
    <Badge color={colorMap[status] || "gray"} text={status || "Unknown"} />
  );
};

export default function DonateHistory() {
  const { data, isLoading } = useGetAllDonateQuery("");
  const donationHistory =
    data?.data?.map((donation: any, index: number) => ({
      key: donation._id,
      date: new Date(donation.date).toLocaleDateString(),
      amount: donation.amount,
      receiver: donation.receiver || "N/A",
      category: donation.category || "General",
      status: donation.status || "Completed",
      paymentMethod: donation.method || "manual",
    })) || [];

  const columns = [
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `$${amount}`,
    },
    { title: "Receiver", dataIndex: "receiver", key: "receiver" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: getStatusBadge,
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button icon={<Eye />} type="link" />,
    },
  ];

  const handleDownloadPDF = () => {
    if (!donationHistory.length) {
      return message.warning("No donation data to download.");
    }

    const doc = new jsPDF();
    doc.text("Donation History", 14, 15);
    const tableColumn = [
      "Date",
      "Amount",
      "Receiver",
      "Category",
      "Method",
      "Status",
    ];
    const tableRows = donationHistory.map((donation: any) => [
      donation.date,
      `$${donation.amount}`,
      donation.receiver,
      donation.category,
      donation.paymentMethod,
      donation.status,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("donation_history.pdf");
  };
  const { data: getme } = useGetmeQuery("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card>
        <Row justify="space-between" align="middle" className="mb-6">
          <Col>
            <Space>
              <Button icon={<Menu />} />
              <Title level={3}>Donor History</Title>
            </Space>
          </Col>
          <Col>
            <Space>
              <Button icon={<Bell />} />
              <Avatar style={{ backgroundColor: "#87d068" }}>
                {getme?.data?.name}
              </Avatar>
            </Space>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mb-6">
          <Col span={6}>
            <Input prefix={<Search />} placeholder="Search..." />
          </Col>
          <Col span={6}>
            <Select placeholder="Category" style={{ width: "100%" }}>
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="Poor & Needy">Poor & Needy</Select.Option>
              <Select.Option value="Education">Education</Select.Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select placeholder="Status" style={{ width: "100%" }}>
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="Completed">Completed</Select.Option>
              <Select.Option value="Pending">Pending</Select.Option>
            </Select>
          </Col>
          <Col span={6}>
            <Space>
              <Button icon={<Filter />} />
              <Button icon={<Download />} onClick={handleDownloadPDF} />
            </Space>
          </Col>
        </Row>

        <Table
          loading={isLoading}
          dataSource={donationHistory}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
}
