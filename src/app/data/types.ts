export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  previewUrl?: string;
  gitUrl?: string;
  repoLinks?: { label: string; url: string }[];
  stacks?: string[];
  type?: string[];
  dateOrPublisher?: string;
  keyFeatures?: string[];
  keyTechnologies?: string[];
  myRole?: string[];
  learningAbout?: string[];
  projectBackground?: string;
}

export interface Project extends PortfolioItem {
  stacks: string[];
}

export interface Certificate extends PortfolioItem {
  type: string[];
  dateOrPublisher: string;
}

export interface AboutItem {
  title: string;
  image?: string;
  language?: string;
  institution?: string;
  date?: string;
  monthYear?: string;
  totalDuration?: string;
  description?: string;
  highlights?: string[];
}
