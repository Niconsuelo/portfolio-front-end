
export interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc: string;
  imagesGroup1: Array<{ src: string, alt: string, width: number, height: number }>;
  imagesGroup2: Array<{ src: string, alt: string, width: number, height: number }>;
  modalLinks: Array<{ icon: React.ReactNode, link: string }>;
}