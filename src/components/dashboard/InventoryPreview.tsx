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
import { Button } from "../ui/button";
import { AlertCircle, Edit, Eye, Plus, RefreshCw } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stock: number;
  threshold: number;
  lastUpdated: string;
}

interface InventoryPreviewProps {
  lowStockItems?: InventoryItem[];
  recentlyUpdated?: InventoryItem[];
}

const InventoryPreview = ({
  lowStockItems = [
    {
      id: "1",
      name: "Premium Headphones",
      sku: "HDX-100",
      stock: 5,
      threshold: 10,
      lastUpdated: "2023-10-15",
    },
    {
      id: "2",
      name: "Wireless Keyboard",
      sku: "KBD-200",
      stock: 3,
      threshold: 15,
      lastUpdated: "2023-10-14",
    },
    {
      id: "3",
      name: "USB-C Cable Pack",
      sku: "CBL-305",
      stock: 8,
      threshold: 20,
      lastUpdated: "2023-10-12",
    },
  ],
  recentlyUpdated = [
    {
      id: "4",
      name: "Bluetooth Speaker",
      sku: "SPK-400",
      stock: 25,
      threshold: 10,
      lastUpdated: "2023-10-16",
    },
    {
      id: "5",
      name: "Laptop Stand",
      sku: "STD-101",
      stock: 18,
      threshold: 8,
      lastUpdated: "2023-10-16",
    },
    {
      id: "6",
      name: "Wireless Mouse",
      sku: "MOU-202",
      stock: 32,
      threshold: 15,
      lastUpdated: "2023-10-15",
    },
  ],
}: InventoryPreviewProps) => {
  return (
    <Card className="w-full h-full bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Inventory Status</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-1" />
            Refresh
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Product
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-md font-semibold flex items-center mb-2">
              <AlertCircle className="h-4 w-4 text-amber-500 mr-1" />
              Low Stock Items
            </h3>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lowStockItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                          {item.stock} / {item.threshold}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold flex items-center mb-2">
              <RefreshCw className="h-4 w-4 text-blue-500 mr-1" />
              Recently Updated
            </h3>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentlyUpdated.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell>{item.stock}</TableCell>
                      <TableCell>{item.lastUpdated}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryPreview;
