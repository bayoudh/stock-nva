import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  ArrowDown,
  ArrowUp,
  Package,
  ShoppingCart,
  Users,
  DollarSign,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  color: string;
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  change,
  icon = <Package />,
  color = "bg-blue-500",
}: MetricCardProps) => {
  return (
    <Card className="bg-white">
      <CardContent className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {change && (
            <div className="flex items-center mt-1">
              {change.isPositive ? (
                <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span
                className={`text-xs ${change.isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {change.value}
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
          {React.cloneElement(icon as React.ReactElement, {
            className: `h-5 w-5 ${color.replace("bg-", "text-")}`,
          })}
        </div>
      </CardContent>
    </Card>
  );
};

interface MetricsCardsProps {
  metrics?: MetricCardProps[];
}

const MetricsCards = ({ metrics }: MetricsCardsProps) => {
  const defaultMetrics: MetricCardProps[] = [
    {
      title: "Total Products",
      value: "1,284",
      change: {
        value: "12% from last month",
        isPositive: true,
      },
      icon: <Package />,
      color: "bg-blue-500",
    },
    {
      title: "Pending Orders",
      value: "23",
      change: {
        value: "5% from last week",
        isPositive: false,
      },
      icon: <ShoppingCart />,
      color: "bg-orange-500",
    },
    {
      title: "Active Clients",
      value: "342",
      change: {
        value: "8% from last month",
        isPositive: true,
      },
      icon: <Users />,
      color: "bg-green-500",
    },
    {
      title: "Monthly Revenue",
      value: "$48,294",
      change: {
        value: "14% from last month",
        isPositive: true,
      },
      icon: <DollarSign />,
      color: "bg-purple-500",
    },
  ];

  const displayMetrics = metrics || defaultMetrics;

  return (
    <div className="w-full bg-background p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default MetricsCards;
