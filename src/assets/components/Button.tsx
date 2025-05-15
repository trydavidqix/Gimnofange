import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  href,
  type = "button",
}) => {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center";

  const variantClasses = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-neutral-800 hover:bg-neutral-900 text-white",
    outline:
      "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
