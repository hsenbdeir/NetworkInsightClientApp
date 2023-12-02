    import React from "react";
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
    import { Box } from "@mui/material";
import { Legend } from "recharts";

    interface LineChartProps {
    data: any[]; // Replace this with your actual data structure
    }


    const CustomLineChart: React.FC<LineChartProps> = ({ data }) => {
        return (
          <Box>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rfInputPower" stroke="#8884d8" name="RF Input Power" />
                <Line type="monotone" dataKey="maxRxLevel" stroke="#82ca9d" name="Max Rx Level" />
                <Line type="monotone" dataKey="rsL_Deviation" stroke="#ffc658" name="RS L Deviation" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        );
      };
      
      export default CustomLineChart;