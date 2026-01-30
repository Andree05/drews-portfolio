
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
