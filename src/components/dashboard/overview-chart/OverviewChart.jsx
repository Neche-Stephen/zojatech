import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const initialData = [
  { name: "JAN", metricA: 500, metricB: 600 },
  { name: "FEB", metricA: 300, metricB: 400 },
  { name: "MAR", metricA: 400, metricB: 500 },
  { name: "APR", metricA: 450, metricB: 550 },
  { name: "MAY", metricA: 550, metricB: 600 },
  { name: "JUN", metricA: 800, metricB: 900 },
  { name: "JUL", metricA: 600, metricB: 700 },
  { name: "AUG", metricA: 400, metricB: 500 },
  { name: "SEP", metricA: 300, metricB: 400 },
  { name: "OCT", metricA: 500, metricB: 600 },
  { name: "NOV", metricA: 350, metricB: 400 },
  { name: "DEC", metricA: 400, metricB: 450 },
];

const platformTallestMonths = {
  "Robbin Hood": { month: "JUN", metricA: 800, metricB: 900 },
  Amreitrade: { month: "APR", metricA: 1000, metricB: 1100 },
  Fidelity: { month: "SEP", metricA: 900, metricB: 1000 },
  Charles: { month: "DEC", metricA: 950, metricB: 1050 },
};

const Chart = () => {
  const [activePlatform, setActivePlatform] = useState("Robbin Hood");
  const [chartData, setChartData] = useState(initialData);

  const handlePlatformClick = (platform) => {
    setActivePlatform(platform);

    // Adjust data based on the selected platform
    const updatedData = initialData.map((entry) => {
      if (entry.name === platformTallestMonths[platform].month) {
        return {
          ...entry,
          metricA: platformTallestMonths[platform].metricA,
          metricB: platformTallestMonths[platform].metricB,
        };
      }
      return entry;
    });

    setChartData(updatedData);
  };

  const firstBarColor = (month) =>
    month === platformTallestMonths[activePlatform].month
      ? "#FFB800"
      : "#F1F1F2";

  const secondBarColor = (month) =>
  month === platformTallestMonths[activePlatform].month
    ? "#FF8600"
    : "#E6E6E7";

  return (
    <div className=" mx-auto p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[#3a3a45] text-xl font-bold font-['Lexend'] leading-relaxed">
          Overview
        </div>
        <div className=" hidden [@media(min-width:1020px)]:block space-x-2">
          {["Robbin Hood", "Amreitrade", "Fidelity", "Charles"].map(
            (platform) => (
              <button
                key={platform}
                className={` h-7 px-4 py-1.5  rounded-xl text-xs font-medium font-['Lexend'] leading-none tracking-tight ${
                  activePlatform === platform
                    ? "bg-[#ff8600] text-white"
                    : "bg-gray-200 text-[#808086]"
                }`}
                onClick={() => handlePlatformClick(platform)}
              >
                {platform}
              </button>
            )
          )}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {/* Bar for Metric A */}
          <Bar dataKey="metricA">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-metricA-${index}`}
                fill={firstBarColor(entry.name)}
              />
            ))}
          </Bar>

          {/* Bar for Metric B */}
          <Bar dataKey="metricB">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-metricB-${index}`}
                fill={secondBarColor(entry.name)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
