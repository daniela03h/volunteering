import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "danger";
  text?: string;
  className?: string
}

export const Button = ({
  color = "primary",
  text = "",
  className = "",
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    primary: " bg-black hover:bg-gray-800 text-white ",
    secondary: "bg-white hover:bg-gray-200 border text-gray-700 text-black",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  return (
    <button
      className={`className="w-full py-2 px-4 rounded font-medium" ${
        buttonStyles[color]
      } ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};
