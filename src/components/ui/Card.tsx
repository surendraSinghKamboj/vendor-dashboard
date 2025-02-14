import React from "react";

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 p-2 rounded-xl">
      {children}
    </div>
  );
};

export default Card;
