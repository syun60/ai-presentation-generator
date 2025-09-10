export interface PresentationInput {
  theme: string;
  audience: string;
  duration: string;
  industry: string;
  tone: string;
  objective: string;
  slideCount: string;
  visualStyle: string;
  language: string;
}

export interface SlideContent {
  title: string;
  keyPoints: string[];
  notes: string;
}

export interface GeneratedPresentation {
  title: string;
  structure: string[];
  slides: SlideContent[];
  designSuggestions: {
    colorPalette: string[];
    fontSuggestion: string;
    layoutStyle: string;
  };
}