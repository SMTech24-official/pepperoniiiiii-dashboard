"use client";

import Spinner from "@/components/common/Spinner";
import { useChartQuery } from "@/redux/features/dashboard/dashboard.api";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function WaveChart() {
  const { data, isFetching } = useChartQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }
  
  const chartData = data?.data

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Revenue History
      </h2>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="waveColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6DD1D8" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#6DD1D800" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              className="text-sm fill-gray-500 dark:fill-gray-400"
            />
            <YAxis className="text-sm fill-gray-500 dark:fill-gray-400" />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="totalRevenue"
              stroke="#2F9FA4"
              fillOpacity={1}
              fill="url(#waveColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
