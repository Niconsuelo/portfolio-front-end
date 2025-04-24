import Image, { StaticImageData } from 'next/image';
import html5 from '../public/html5.png';
import javascript from '../public/javascript.png';
import figma from '../public/figma.svg';
import jest from '../public/jest.png';

export const imagesGroup1: { src: StaticImageData; alt: string; width: number; height: number }[] = [
  { src: html5, alt: "Icono TypeScript", width: 50, height: 30 },
  { src: html5, alt: "Icono ReactJS", width: 50, height: 30 },
  { src: jest, alt: "Icono Jest", width: 50, height: 20 },
];

export const imagesGroup2: { src: StaticImageData; alt: string; width: number; height: number }[] = [
  { src: html5, alt: "Icono HTML", width: 50, height: 30 },
  { src: javascript, alt: "Icono Javascript", width: 50, height: 30 },
  { src: figma, alt: "Icono Figma", width: 50, height: 28 },
];