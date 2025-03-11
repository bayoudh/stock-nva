import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import {
  BarChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface SalesChartProps {
  title?: string;
  description?: string;
  data?: {
    labels: string[];
    datasets: {
      name: string;
      data: number[];
    }[];
  };
  timeRange?: string;
  percentageChange?: number;
}

const SalesChart = ({
  title = "Sales Overview",
  description = "Monthly revenue performance",
  data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        name: "Revenue",
        data: [4500, 5200, 4800, 5800, 6000, 6500],
      },
      {
        name: "Orders",
        data: [45, 52, 48, 58, 60, 65],
      },
    ],
  },
  timeRange = "Last 6 Months",
  percentageChange = 12.5,
}: SalesChartProps) => {
  // Mock chart rendering - in a real implementation, you would use a chart library
  const renderMockChart = () => {
    const maxValue = Math.max(...data.datasets[0].data);

    return (
      <div className="w-full h-[200px] mt-4 relative">
        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-muted-foreground absolute bottom-0 w-full px-2">
          {data.labels.map((label, index) => (
            <div key={index}>{label}</div>
          ))}
        </div>

        {/* Mock bars */}
        <div className="flex justify-between items-end h-[180px] w-full px-2">
          {data.datasets[0].data.map((value, index) => (
            <div
              key={index}
              className="w-8 bg-primary/80 rounded-t-sm"
              style={{ height: `${(value / maxValue) * 160}px` }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full h-full bg-background">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue={timeRange}>
            <SelectTrigger className="w-[160px] h-8">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
              <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
              <SelectItem value="Last 6 Months">Last 6 Months</SelectItem>
              <SelectItem value="Year to Date">Year to Date</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex space-x-1">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <BarChart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <LineChart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold">$32,621.72</p>
            <div className="flex items-center text-sm">
              {percentageChange >= 0 ? (
                <>
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">{percentageChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-red-500">
                    {Math.abs(percentageChange)}%
                  </span>
                </>
              )}
              <span className="text-muted-foreground ml-1">
                vs previous period
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            {data.datasets.map((dataset, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`h-3 w-3 rounded-full mr-2 ${index === 0 ? "bg-primary" : "bg-blue-300"}`}
                />
                <span className="text-sm">{dataset.name}</span>
              </div>
            ))}
          </div>
        </div>
        {renderMockChart()}
      </CardContent>
    </Card>
  );
};

export default SalesChart;
