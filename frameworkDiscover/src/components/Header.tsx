import React from "react";
import { Code2, Layers, Sparkles } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 relative overflow-hidden">
      {/* Matrix-style background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 text-green-400 font-mono text-xs">
          {">>> system.initialize()"}
        </div>
        <div className="absolute top-20 right-12 text-green-400 font-mono text-xs">
          {"[SCANNING FRAMEWORKS...]"}
        </div>
        <div className="absolute bottom-12 left-16 text-green-400 font-mono text-xs">
          {"framework_explorer.exe"}
        </div>
        <div className="absolute bottom-8 right-8 text-green-400 font-mono text-xs">
          {"[STATUS: ONLINE]"}
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl backdrop-blur-sm border border-green-400/30 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Code2 className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              Framework Explorer
            </h1>
            <div className="p-3 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl backdrop-blur-sm border border-green-400/30 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Layers className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-300 animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light">
              Discover, explore, and compare development frameworks to find the
              perfect tool for your next project
            </p>
            <Sparkles className="w-5 h-5 text-green-300 animate-pulse" />
          </div>
          <div className="flex justify-center space-x-6 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              <span className="text-gray-400">Interactive exploration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span className="text-gray-400">Real-world examples</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                style={{ animationDelay: "1s" }}
              ></div>
              <span className="text-gray-400">Detailed comparisons</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
