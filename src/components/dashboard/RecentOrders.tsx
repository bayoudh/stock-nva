import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";

interface Order {
  id: string;
  client: string;
  date: string;
  amount: string;
  status: "pending" | "processing" | "completed" | "cancelled";
}

interface RecentOrdersProps {
  orders?: Order[];
  title?: string;
}

const RecentOrders = ({
  orders = [
    {
      id: "ORD-001",
      client: "Acme Corp",
      date: "2023-10-15",
      amount: "$1,250.00",
      status: "pending",
    },
    {
      id: "ORD-002",
      client: "TechSolutions Inc",
      date: "2023-10-14",
      amount: "$3,420.50",
      status: "processing",
    },
    {
      id: "ORD-003",
      client: "Global Enterprises",
      date: "2023-10-12",
      amount: "$890.75",
      status: "completed",
    },
    {
      id: "ORD-004",
      client: "Innovate LLC",
      date: "2023-10-10",
      amount: "$2,150.00",
      status: "cancelled",
    },
    {
      id: "ORD-005",
      client: "Prime Industries",
      date: "2023-10-08",
      amount: "$1,875.25",
      status: "completed",
    },
  ],
  title = "Recent Orders",
}: RecentOrdersProps) => {
  // Function to determine badge color based on status
  const getStatusBadgeVariant = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "secondary";
      case "processing":
        return "default";
      case "completed":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Card className="w-full h-full bg-background">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.client}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(order.status)}>
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;
