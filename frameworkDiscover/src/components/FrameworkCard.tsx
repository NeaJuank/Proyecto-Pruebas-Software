import React, { useState } from "react";
import type { Framework } from "../types/framework";
import {
  ExternalLink,
  Github,
  Globe,
  Star,
  Calendar,
  Users,
  Zap,
} from "lucide-react";

interface FrameworkCardProps {
  framework: Framework;
  onViewDetails: (framework: Framework) => void;
}

export const FrameworkCard: React.FC<FrameworkCardProps> = ({
  framework,
  onViewDetails,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating / 20); // tu popularidad va de 0 a 100 → convertir a escala 0-5
    const hasHalfStar = rating % 20 !== 0;

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 transition-all duration-300 ${
            i < fullStars
              ? "fill-green-400 text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"
              : i === fullStars && hasHalfStar
              ? "fill-green-400 text-green-400 opacity-50"
              : "text-gray-600 hover:text-green-400"
          } ${isHovered ? "scale-110" : ""}`}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 ${
        isHovered
          ? "border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)] shadow-green-400/20"
          : "hover:border-green-500"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div
                className={`w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden transition-all duration-300 ${
                  imageLoaded ? "ring-2 ring-green-400/50" : ""
                } ${
                  isHovered
                    ? "scale-110 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                    : ""
                }`}
              >
                <img
                  src={framework.logo}
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              {isHovered && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold font-mono text-green-400 group-hover:text-green-300 transition-colors duration-300">
                {framework.name}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs font-mono text-gray-400 bg-gray-800 px-2 py-1 rounded">
                  {framework.category}
                </span>
                <span className="text-xs text-gray-500">
                  {framework.releaseYear}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Popularidad (Stars) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {renderStars(framework.popularity)}
            <span className="ml-2 text-sm font-mono text-green-400 font-bold">
              {framework.popularity}%
            </span>
          </div>
          <div className="text-xs font-mono text-gray-500">POPULARITY</div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {framework.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-400 font-mono">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-green-400" />
            <span>{framework.releaseYear}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-green-400" />
            <span>{framework.maintainedBy}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-green-400" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full mr-1 ${
                    i < framework.performance ? "bg-green-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
          <div>
            <span className="px-2 py-1 rounded bg-gray-800 text-green-400">
              {framework.learningCurve}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4 flex flex-wrap gap-1">
          {framework.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-green-300 rounded text-xs"
            >
              {feature}
            </span>
          ))}
          {framework.features.length > 3 && (
            <span className="px-2 py-1 bg-gray-800 text-gray-500 rounded text-xs">
              +{framework.features.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={framework.officialDocs}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-4 py-3 rounded-lg transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Docs</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <a
            href={framework.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-green-400 text-gray-300 hover:text-green-400 px-4 py-3 rounded-lg transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(framework)}
          className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-200 text-sm font-medium"
        >
          View Details
        </button>
      </div>

      {/* Matrix overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-4 left-4 text-green-400 font-mono text-xs">
          {"› initialize_framework()"}
        </div>
        <div className="absolute bottom-4 right-4 text-green-400 font-mono text-xs">
          {"[STATUS: ACTIVE]"}
        </div>
      </div>
    </div>
  );
};
