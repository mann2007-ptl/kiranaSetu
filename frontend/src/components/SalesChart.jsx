import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from './Card';
import { useTheme } from '../context/ThemeContext';

const SalesChart = () => {
    const [chartData, setChartData] = useState([]);
    const { isDark } = useTheme();

    useEffect(() => {
        const fetchTrend = async () => {
            try {
                const res = await fetch('/api/dashboard/sales-trend', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                if (!res.ok) {
                    console.error("Sales trend failed to load");
                    return;
                }
                const data = await res.json();
                if (Array.isArray(data)) {
                    setChartData(data);
                }
            } catch (error) {
                console.error("Error fetching trend:", error);
            }
        };

        fetchTrend();
    }, []);

    const tickColor = isDark ? '#6B7280' : '#6B7280';
    const gridColor = isDark ? '#374151' : '#F3F4F6';
    const tooltipBg = isDark ? '#1F2937' : '#FFFFFF';
    const tooltipBorder = isDark ? '#374151' : '#F3F4F6';
    const tooltipText = isDark ? '#F9FAFB' : '#111827';
    const cursorFill = isDark ? '#374151' : '#F9FAFB';

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ background: tooltipBg, border: `1px solid ${tooltipBorder}` }} className="p-3 shadow-xl rounded-xl">
                    <p style={{ color: tooltipText }} className="font-semibold mb-2">{label}</p>
                    <p className="text-sm text-indigo-400">
                        Actual Sales: <span className="font-semibold">₹{payload[0].value}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="h-full flex flex-col">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Weekly Sales</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Real-time sales for the past 7 days</p>
            </div>

            <div className="flex-1 w-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                        barSize={32}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: tickColor, fontSize: 13 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: tickColor, fontSize: 13 }}
                            tickFormatter={(value) => `₹${value / 1000}k`}
                        />
                        <Tooltip cursor={{ fill: cursorFill }} content={<CustomTooltip />} />
                        <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '20px', color: isDark ? '#9CA3AF' : '#6B7280' }} />
                        <Bar dataKey="sales" name="Actual Sales" fill="#4F46E5" radius={[4, 4, 4, 4]} animationDuration={1500} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default SalesChart;
