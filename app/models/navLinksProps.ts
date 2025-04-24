import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavLinkProps {
  text?: string;
  icon?: IconDefinition;
  ref?: string;
  contactRef: React.RefObject<HTMLDivElement>;
}
