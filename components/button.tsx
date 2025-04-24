import React from "react";
import { ButtonProps } from "../app/models/buttonProps"


const Button: React.FC<ButtonProps> = ({ buttonText, className, href, onClick }) => {
  if (href) {
    return (
      <a href={href} className={`inline-block text-center ${className}`} target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`inline-block ${className}`}>
      {buttonText}
    </button>
  );
};

export default Button;
