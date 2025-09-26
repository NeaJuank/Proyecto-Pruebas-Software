export interface Framework {
  id: string;
  name: string;
  category: "frontend" | "backend" | "fullstack" | "mobile";
  description: string;
  logo: string;
  language: string;
  popularity: number;
  releaseYear: number;
  maintainedBy: string;
  officialDocs: string;
  githubUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  syntaxExample: {
    title: string;
    code: string;
  };
  companies: string[];
  learningCurve: "Easy" | "Medium" | "Hard";
  performance: number; // 1-5 scale
}
