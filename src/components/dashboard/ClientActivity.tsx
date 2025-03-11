import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { UserPlus, Users, ArrowUpRight } from "lucide-react";

interface ClientActivityProps {
  newClients?: {
    id: string;
    name: string;
    email: string;
    joinDate: string;
    avatarUrl?: string;
  }[];
  topClients?: {
    id: string;
    name: string;
    orderCount: number;
    totalSpent: number;
    avatarUrl?: string;
  }[];
}

const ClientActivity = ({
  newClients = [
    {
      id: "1",
      name: "Jane Cooper",
      email: "jane@example.com",
      joinDate: "2023-05-15",
      avatarUrl: "",
    },
    {
      id: "2",
      name: "Robert Fox",
      email: "robert@example.com",
      joinDate: "2023-05-12",
      avatarUrl: "",
    },
    {
      id: "3",
      name: "Esther Howard",
      email: "esther@example.com",
      joinDate: "2023-05-10",
      avatarUrl: "",
    },
  ],
  topClients = [
    {
      id: "1",
      name: "Acme Corporation",
      orderCount: 32,
      totalSpent: 28500,
      avatarUrl: "",
    },
    {
      id: "2",
      name: "Globex Industries",
      orderCount: 28,
      totalSpent: 24200,
      avatarUrl: "",
    },
    {
      id: "3",
      name: "Stark Enterprises",
      orderCount: 25,
      totalSpent: 21800,
      avatarUrl: "",
    },
  ],
}: ClientActivityProps) => {
  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Client Activity</CardTitle>
        <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
          View All
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-3">
              <UserPlus className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-medium">New Clients</h3>
            </div>
            <div className="space-y-3">
              {newClients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage
                        src={
                          client.avatarUrl ||
                          `https://api.dicebear.com/7.x/avataaars/svg?seed=${client.name}`
                        }
                        alt={client.name}
                      />
                      <AvatarFallback>
                        {client.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{client.name}</p>
                      <p className="text-xs text-gray-500">{client.email}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(client.joinDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <Users className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-medium">Top Clients by Volume</h3>
            </div>
            <div className="space-y-3">
              {topClients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage
                        src={
                          client.avatarUrl ||
                          `https://api.dicebear.com/7.x/avataaars/svg?seed=${client.name}`
                        }
                        alt={client.name}
                      />
                      <AvatarFallback>
                        {client.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{client.name}</p>
                      <p className="text-xs text-gray-500">
                        {client.orderCount} orders
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">
                    ${client.totalSpent.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientActivity;
