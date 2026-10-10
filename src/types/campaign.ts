export interface Candidate {
  id: string;
  name: string;
  displayName: string;
  phone: string;
  rawPhone: string;
  whatsappNumber: string;
  role: string;
  serialNo: number;
  roomContact: string;
  agendaTitle: string;
  agendaDescription: string;
  keyPoints: string[];
  department?: string;
  colorScheme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
}

export interface ManifestoPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface PollOption {
  id: string;
  title: string;
  category: string;
  votes: number;
}
