import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: string;
};

const Button: React.FC<ButtonProps> = ({ type = "button", children }) => {
  return (
    <button
      type={type}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all">
      {children}
    </button>
  );
};

export default Button;
