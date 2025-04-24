import { RefObject, useRef } from "react";

export const useSectionRefs = () => {
  return {
    homeRef: useRef<HTMLDivElement>(null),
    aboutRef: useRef<HTMLDivElement>(null),
    servicesRef: useRef<HTMLDivElement>(null),
    skillsRef: useRef<HTMLDivElement>(null),
    projectsRef: useRef<HTMLDivElement>(null),
    contactRef: useRef<HTMLDivElement>(null),
  };
};