import React from "react";
import type { Framework } from "../types/framework";
import {
  X,
  ExternalLink,
  Github,
  Star,
  Calendar,
  Users,
  Code,
  CheckCircle,
  XCircle,
  Target,
  Building,
} from "lucide-react";

interface FrameworkModalProps {
  framework: Framework | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FrameworkModal: React.FC<FrameworkModalProps> = ({
  framework,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !framework) return null;

  const categoryColors = {
    frontend: "bg-green-500",
    backend: "bg-green-500",
    fullstack: "bg-green-500",
    mobile: "bg-green-500",
  };

  const difficultyColors = {
    Easy: "text-green-400 bg-green-400/20 border-green-400/30",
    Medium: "text-yellow-400 bg-yellow-400/20 border-yellow-400/30",
    Hard: "text-red-400 bg-red-400/20 border-red-400/30",
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl max-w-4xl max-h-[90vh] w-full overflow-y-auto shadow-2xl shadow-green-400/10">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <img src={framework.logo} alt="logo" className="h-20 w-20" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-mono text-green-400">
                {framework.name}
              </h2>
              <div className="flex items-center space-x-2 mt-1">
                <span
                  className={`px-3 py-1 rounded-full text-sm text-white font-mono ${
                    categoryColors[framework.category]
                  } capitalize`}
                >
                  {framework.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-lg text-sm font-medium font-mono border ${
                    difficultyColors[framework.learningCurve]
                  }`}
                >
                  {framework.learningCurve} to learn
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-green-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Description and Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-400 font-mono">
                Overview
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {framework.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400 font-mono">
                    Released in {framework.releaseYear}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400 font-mono">
                    Maintained by {framework.maintainedBy}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400 font-mono">
                    Language: {framework.language}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-400 font-mono">
                Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400 font-mono">
                      Popularity
                    </span>
                    <span className="text-sm font-medium text-green-400 font-mono">
                      {framework.popularity}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                      style={{ width: `${framework.popularity}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400 font-mono">
                      Performance
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < framework.performance
                              ? "text-green-400 fill-current"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={framework.officialDocs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors font-mono"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Official Docs</span>
                  </a>
                  <a
                    href={framework.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 border border-gray-700 hover:border-green-400 transition-colors font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-400 font-mono">
              Key Features
            </h3>
            <div className="flex flex-wrap gap-2">
              {framework.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-gray-800 text-green-300 rounded-lg border border-gray-700 font-mono text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-400 font-mono flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Pros</span>
              </h3>
              <ul className="space-y-2">
                {framework.pros.map((pro, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-400 font-mono flex items-center space-x-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <span>Cons</span>
              </h3>
              <ul className="space-y-2">
                {framework.cons.map((con, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-400 font-mono flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span>Common Use Cases</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {framework.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <Target className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-400 font-mono flex items-center space-x-2">
              <Code className="w-5 h-5 text-green-400" />
              <span>{framework.syntaxExample.title}</span>
            </h3>
            <div className="bg-black rounded-lg p-4 overflow-x-auto border border-gray-800">
              <pre className="text-sm text-green-300 font-mono">
                <code>{framework.syntaxExample.code}</code>
              </pre>
            </div>
          </div>

          {/* Companies */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-400 font-mono flex items-center space-x-2">
              <Building className="w-5 h-5 text-green-400" />
              <span>Used by Companies</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {framework.companies.map((company, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-green-300 rounded-full border border-gray-700 font-medium font-mono hover:border-green-400 transition-colors duration-200"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
