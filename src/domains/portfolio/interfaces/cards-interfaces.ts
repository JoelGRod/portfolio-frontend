export interface WorkCardInfo {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  icon: string;
  codeLink?: string;
  viewLink?: string;
}

export interface SocialMediaInfo {
  name: string;
  icon: string;
  url: string;
}

export interface ProfileInfo {
  name: string;
  specialization: string;
  desc: string;
  location: string;
  email: string;
  img: string;
}

export interface ExperienceInfo {
  profile: string;
  company: string;
  location: string;
  from: string;
  to: string;
  desc: string;
}

export interface EducationInfo {
  title: string;
  academy: string;
  location: string;
  from: string;
  to: string;
  desc: string;
}

export interface LangInfo {
  lang: string;
  level: string;
  stars: number;
  icon: string;
}
export interface KnowledgeInfo {
  name: string;
  icon: string;
}
