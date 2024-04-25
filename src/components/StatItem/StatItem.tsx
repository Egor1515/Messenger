import { IStatItemProps } from "@/types/IStatItemProps";
import React from "react";

const StatItem: React.FC<IStatItemProps> = ({ value, label }) => (
    <div className="p-4 sm:w-1/4 w-1/2">
        <div className="bg-emerald-500 rounded-lg p-2 xl:p-6">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white text-center">{value}</h2>
            <p className="leading-relaxed text-gray-100 font-bold text-center">{label}</p>
        </div>
    </div>
);

export default StatItem