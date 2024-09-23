import React from "react";

interface ButtonProps {
  onClick?: () => void;
  buttonText: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, buttonText, className }) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {buttonText}
    </button>
  );
};

export default Button;
