"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/button";
import FormRenderer from "@/components/form-renderer";
import { FieldValues } from "react-hook-form";
import { useDisclosure } from "@nextui-org/react";
import {
  createFormFields,
  ExtractFormFieldType,
} from "@/types/generic-form.types";

export interface ModelModalProps<T extends FieldValues> {
  fieldKeys: (keyof T)[];
}

export default function OpenModelModalFormButton<T extends FieldValues>({
  fieldKeys,
}: ModelModalProps<T>) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formFields: ExtractFormFieldType<T> = createFormFields<T>(fieldKeys);
  useEffect(() => {
    debugger;
    console.log("Fields:", formFields);
  }, []);

  const handleSubmit = (data: T) => {
    console.log("Form data submitted:", data);
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Close
      </Button>

      {isOpen && (
        <FormRenderer<T>
          fields={formFields}
          onSubmit={handleSubmit}
          onOpenChange={onOpenChange}
          isOpen={isOpen}
        />
      )}
    </>
  );
}
