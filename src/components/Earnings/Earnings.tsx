import React, { useState, useEffect, useCallback } from "react";
import { IEarningData } from "@/types/IEarningData";

const Earnings: React.FC = () => {
    const [earningData, setEarningData] = useState<IEarningData[]>([]);

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                const response = await fetch('http://localhost:8888/api/earnings.php');
                if (!response.ok) {
                    throw new Error('Failed to fetch earnings data  ');
                }
                const data = await response.json();
                setEarningData(data);
            } catch (error) {
                console.error('Error fetching earnings data:', error);
            }
        };

        fetchEarnings();
    }, []);

    return (
        <div className="bg-white border border-gray-100 shadow-md p-6 rounded-md overflow-y-auto h-full">
            <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Spendings</div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[460px]">
                    <thead>
                        <tr>
                            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
                            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Spendings</th>
                            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {earningData.map((data, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b border-b-gray-50">
                                    <div className="flex items-center">
                                        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block" />
                                        <span className="text-gray-600 text-sm font-medium ml-2 truncate">{data.service}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b border-b-gray-50">
                                    <span className="text-[13px] font-medium text-red-500">{data.earning}</span>
                                </td>
                                <td className="py-2 px-4 border-b border-b-gray-50">
                                    <span className={`inline-block p-1 rounded ${data.status === 'Pending' ? 'text-yellow-600' : 'text-emerald-500 '} font-medium text-[12px] leading-none`}>{data.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Earnings;
