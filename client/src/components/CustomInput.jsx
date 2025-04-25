import clsx from "clsx";
import React from "react";

export const CustomInput = React.forwardRef(
  ({ type, label, className, name, error, placeholder, ...rest }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          ref={ref}
          className={clsx(
            "placeholder-gray-400 text-gray-900 outline-none text-base w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary",
            error && "border-red-500 focus:ring-red-300",
            className
          )}
          {...rest}
        />
        {error && <span className="text-sm text-red-500 mt-0.5">{error}</span>}
      </div>
    );
  }
);

// Name the component for better debugging
CustomInput.displayName = "CustomInput";
