import React, { useEffect, useState } from "react";
import { IStatisticData } from "@/types/StatisticDataInterface";
import StatItem from "../StatItem/StatItem";

const Statistic: React.FC = () => {
    const [statistic, setStatistic] = useState<IStatisticData[] | null>(null);

    useEffect(() => {
        const fetchStatistic = async () => {
            try {
                const response = await fetch('http://localhost/api/statistic.php');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data)
                setStatistic(data);
            } catch (error) {
                console.error('Error fetching statistic data:', error);
            }
        };

        fetchStatistic();
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="container py-2 mx-auto">
                <div className="flex flex-wrap w-full mb-8">
                    <div className="w-full lg:mb-0">
                        <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">Statistic</h1>
                        <div className="h-1 w-20 bg-emerald-500 rounded"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    {statistic && (
                        <>
                            <StatItem value={statistic[0].users} label="Users" />
                            <StatItem value={statistic[0].subscribes} label="Subs" />
                            <StatItem value={statistic[0].downloads} label="Likes" />
                            <StatItem value={statistic[0].products} label="Products" />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};



export default Statistic;
