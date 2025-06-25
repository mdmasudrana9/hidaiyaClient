import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled,
  children,
  className = "",
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-sans font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  // Styling for button variants
  const variantStyles: Record<string, string> = {
    default: "bg-green-700 text-white hover:bg-green-800 focus:ring-green-500",
    outline:
      "border border-green-700 text-green-700 hover:bg-green-100 focus:ring-green-500",
  };

  // Styling for button sizes
  const sizeStyles: Record<string, string> = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3",
  };

  // Full width support
  const widthStyle = fullWidth ? "w-full" : "w-auto";

  // Combine all classNames
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyle,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
      dir="auto" // Automatically handles Bangla/Arabic/English direction
      lang="bn" // Helps with screen readers & semantic meaning
    >
      {loading && (
        <svg
          className="animate-spin mr-2 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};
