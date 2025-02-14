import React, { ChangeEvent } from "react";

type InputProps = {
  type: string;
  placeholder?: string;
  className?: string;
  name?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  handleChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full my-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      name={name}
      onChange={handleChange}
    />
  );
};

export default Input;
