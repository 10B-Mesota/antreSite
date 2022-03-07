import React from "react";

interface CardProps {
  content: string;
  img: string;
}

export const Card: React.FC<CardProps> = ({ content, img }) => {
  return (
    <div className="mx-4 border-2 rounded-lg overflow-hidden border-slate-400 hover:border-slate-600 hover:scale-105">
      <img src={img} alt="" />
      <div className="text-center">{content}</div>
    </div>
  );
};
