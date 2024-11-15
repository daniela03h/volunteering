import React, {ReactNode} from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "danger";
  text?: string;
  className?: string
  icon?: ReactNode;
}

export const Button = ({
  color = "primary",
  text = "",
  className = "",
  icon = null,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    primary: " bg-black hover:bg-gray-800 text-white ",
    secondary: "bg-white hover:bg-gray-200 border text-gray-700 text-black",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  return (
    <button
      className={`w-full py-2 px-4 rounded font-medium flex justify-center items-center gap-4 ${
        buttonStyles[color]
      } ${className}`}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
};
