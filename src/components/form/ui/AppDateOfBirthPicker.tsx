import { AlertCircle, Calendar, CheckCircle2, Info } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, FieldError, useFormContext } from "react-hook-form";

interface AppDateOfBirthPickerProps {
  name: string;
  label?: string;
  required?: boolean;
  helperText?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AppDateOfBirthPicker = ({
  name,
  label,
  required = false,
  helperText,
  className = "",
  size = "md",
}: AppDateOfBirthPickerProps) => {
  const {
    control,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;
  const isDirty = dirtyFields[name];
  const isValid = isDirty && !error;

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5",
    lg: "px-5 py-3 text-lg",
  };

  const labelSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={`mb-5 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`block mb-1.5 font-medium text-white ${labelSizeClasses[size]}`}
        >
          <span className="text-white">{label}</span>{" "}
          {required && <span className="text-blue-600">*</span>}
        </label>
      )}

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <Calendar size={18} />
        </div>

        <Controller
          control={control}
          name={name}
          rules={{
            required: required ? `${label || name} is required` : false,
          }}
          render={({ field }) => (
            <DatePicker
              {...field}
              selected={field.value ? new Date(field.value) : null}
              onChange={(date) => {
                const formattedDate = date
                  ? date.toISOString().split("T")[0]
                  : null;
                field.onChange(formattedDate);
                console.log("Selected Date:", formattedDate); // e.g. 2025-05-08
              }}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
              className={`w-lg rounded-lg border transition-all duration-200 bg-white focus:ring-2 focus:outline-none
                ${sizeClasses[size]} pl-10
                ${
                  error
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                    : isValid
                      ? "border-green-300 focus:border-green-500 focus:ring-green-100"
                      : "border-gray-300 focus:border-blue-300 focus:ring-blue-100"
                }`}
              showPopperArrow={false}
            />
          )}
        />

        {error ? (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            <AlertCircle size={18} />
          </div>
        ) : isValid ? (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
            <CheckCircle2 size={18} />
          </div>
        ) : null}
      </div>

      <div className="mt-1.5 min-h-[20px]">
        {error ? (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle size={14} />
            {error.message}
          </p>
        ) : helperText ? (
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Info size={14} />
            {helperText}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default AppDateOfBirthPicker;
