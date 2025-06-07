import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ButtonProps
  extends Omit<JSX.HTMLAttributes<HTMLButtonElement>, "loading" | "size"> {
  variant?: "primary" | "secondary" | "neutral";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  class: className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "btn text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "btn-primary focus:ring-primary",
    secondary: "btn-secondary focus:ring-secondary",
    neutral: "btn-neutral focus:ring-neutral",
  };
  const sizeClasses = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    loading && "loading",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled || loading}
      class={classes}
      aria-busy={loading}
      aria-disabled={!IS_BROWSER || props.disabled || loading}
    >
      {loading ? (
        <>
          <span
            class="loading loading-spinner loading-sm mr-2"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Loading...</span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
