import React from "react";
import type { Framework } from "../types/framework";
import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react";

interface StatisticsProps {
  frameworks: Framework[];
}

export const Statistics: React.FC<StatisticsProps> = ({ frameworks }) => {
  const currentYear = new Date().getFullYear();
  const totalFrameworks = frameworks.length;
  const avgPopularity = Math.round(
    frameworks.reduce((sum, f) => sum + f.popularity, 0) / totalFrameworks
  );
  const newestFrameworks = frameworks.filter(
    (f) => currentYear - f.releaseYear <= 5
  ).length;
  const avgPerformance = (
    frameworks.reduce((sum, f) => sum + f.performance, 0) / totalFrameworks
  ).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-gray-400 text-sm font-mono">Total Frameworks</p>
            <p className="text-3xl font-bold font-mono text-green-400">
              {totalFrameworks}
            </p>
          </div>
          <BarChart3 className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-2 right-2 text-xs font-mono text-green-400/50">
          {"[ACTIVE]"}
        </div>
      </div>

      <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-gray-400 text-sm font-mono">Avg Popularity</p>
            <p className="text-3xl font-bold font-mono text-green-400">
              {avgPopularity}%
            </p>
          </div>
          <TrendingUp className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-2 right-2 text-xs font-mono text-green-400/50">
          {"[ACTIVE]"}
        </div>
      </div>

      <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-gray-400 text-sm font-mono">Modern (≤5 years)</p>
            <p className="text-3xl font-bold font-mono text-green-400">
              {newestFrameworks}
            </p>
          </div>
          <Calendar className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-2 right-2 text-xs font-mono text-green-400/50">
          {"[ACTIVE]"}
        </div>
      </div>

      <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-gray-400 text-sm font-mono">Avg Performance</p>
            <p className="text-3xl font-bold font-mono text-green-400">
              {avgPerformance}/5
            </p>
          </div>
          <Users className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-2 right-2 text-xs font-mono text-green-400/50">
          {"[ACTIVE]"}
        </div>
      </div>
    </div>
  );
};
