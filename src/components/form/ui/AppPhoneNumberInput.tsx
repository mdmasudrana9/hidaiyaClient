import PhoneInput from "react-phone-input-2";
import { useFormContext, Controller, FieldError } from "react-hook-form";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import "react-phone-input-2/lib/style.css";

interface AppPhoneNumberInputProps {
  name: string;
  label?: string;
  required?: boolean;
  helperText?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AppPhoneNumberInput = ({
  name,
  label,
  required = false,
  helperText,
  className = "",
  size = "md",
}: AppPhoneNumberInputProps) => {
  const {
    control,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;
  const isDirty = dirtyFields[name];
  const isValid = isDirty && !error;

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2.5",
    lg: "text-lg px-5 py-5",
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
          className={`block mb-1.5 font-medium text-gray-800 ${labelSizeClasses[size]}`}
        >
          {label} {required && <span className="text-blue-600">*</span>}
        </label>
      )}

      <div className="relative">
        <Controller
          name={name}
          control={control}
          rules={{
            required: required ? `${label || name} is required` : false,
          }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"bd"}
              inputClass={`
                !w-full !bg-white py-5 !border !rounded-lg !focus:outline-none !transition-all !duration-200
                ${sizeClasses[size]}
                ${
                  error
                    ? "!border-red-300 focus:!border-red-500 focus:!ring-red-100"
                    : isValid
                    ? "!border-green-300 focus:!border-green-500 focus:!ring-green-100"
                    : "!border-gray-300 focus:!border-blue-300 focus:!ring-blue-100"
                }
              `}
              buttonClass="!bg-white"
              inputProps={{
                name,
                required,
              }}
              enableSearch
              disableSearchIcon
            />
          )}
        />

        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            <AlertCircle size={18} />
          </div>
        )}
        {!error && isValid && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
            <CheckCircle2 size={18} />
          </div>
        )}
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

export default AppPhoneNumberInput;
