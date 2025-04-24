// src/data/navLinks.ts
import { faCircleUser, faLayerGroup, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLinkMenuProps } from '../models/navLinkMenu'; 

export const navLinks: NavLinkMenuProps[] = [
  { text: "HOME", icon: faCircleUser, ref: "homeRef" },
  { text: "ABOUT", icon: faCircleUser, ref: "aboutRef" },
  { text: "SERVICES", icon: faCircleUser, ref: "servicesRef" },
  { text: "WORKING SKILLS", icon: faLayerGroup, ref: "skillsRef" },
  { text: "PROJECTS", icon: faCode, ref: "projectsRef" },
  { text: "CONTACT", icon: faEnvelope, ref: "contactRef" },
];
