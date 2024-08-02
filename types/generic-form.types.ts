import React from "react";

export type FormField<T> = {
  [K in keyof T]: {
    type: "text" | "email" | "password" | "select";
    label: string;
    options?: { [key: string]: string };
    attributes?: React.InputHTMLAttributes<HTMLInputElement>;
  };
};

export type FormFieldAttributes = {
  type: "text" | "select";
  label: string;
  attributes: Record<string, unknown>;
  options?: Record<string, string>; // Add options for select fields
};

export type ExtractFormFieldType<T> = {
  [K in keyof T]: FormFieldAttributes;
};

export function createFormFields<T>(
  keys: (keyof T)[],
): ExtractFormFieldType<T> {
  return keys.reduce((acc, key) => {
    acc[key] = {
      type: "text", // You can add logic here to determine field type
      label: String(key),
      attributes: {},
    };

    return acc;
  }, {} as ExtractFormFieldType<T>);
}

// Define the valid properties for the Input component
const validInputProps = [
  "type",
  "value",
  "onChange",
  "onBlur",
  "placeholder",
  "required",
  "autoComplete",
  "autoFocus",
  "disabled",
  "name",
  "readOnly",
  "maxLength",
  "minLength",
  "pattern",
  "size",
  "step",
  "form",
  "list",
  "max",
  "min",
  "multiple",
  "accept",
  "capture",
  "src",
  "alt",
];

// Utility function to filter valid properties
export const filterValidInputProps = (
  props: Record<string, any> | undefined,
) => {
  if (!props) return {};

  return Object.keys(props)
    .filter((key) => validInputProps.includes(key))
    .reduce(
      (obj, key) => {
        obj[key] = props[key];

        return obj;
      },
      {} as Record<string, any>,
    );
};
