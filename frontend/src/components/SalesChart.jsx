import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { weeklyChartData } from '../data/mockData';
import Card from './Card';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-100 shadow-xl rounded-xl">
                <p className="font-semibold text-gray-900 mb-2">{label}</p>
                <p className="text-sm text-indigo-600 mb-1">
                    Actual Sales: <span className="font-semibold">₹{payload[0].value}</span>
                </p>
                <p className="text-sm text-blue-400">
                    Expected: <span className="font-semibold">₹{payload[1].value}</span>
                </p>
            </div>
        );
    }
    return null;
};

const SalesChart = () => {
    return (
        <Card className="h-full flex flex-col">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900">Weekly Sales vs Expected</h3>
                <p className="text-sm text-gray-500 mt-1">Comparing real-time sales against AI predictions</p>
            </div>

            <div className="flex-1 w-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={weeklyChartData}
                        margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                        barSize={32}
                        barGap={4}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 13 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 13 }}
                            tickFormatter={(value) => `₹${value / 1000}k`}
                        />
                        <Tooltip cursor={{ fill: '#F9FAFB' }} content={<CustomTooltip />} />
                        <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '20px' }} />
                        <Bar dataKey="sales" name="Actual Sales" fill="#4F46E5" radius={[4, 4, 4, 4]} animationDuration={1500} />
                        <Bar dataKey="expected" name="Expected" fill="#93C5FD" radius={[4, 4, 4, 4]} animationDuration={1500} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default SalesChart;
