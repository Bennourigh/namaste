import React from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import {
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { ExtractFormFieldType } from "@/types/generic-form.types";

interface FormRendererProps<T extends FieldValues> {
  fields: ExtractFormFieldType<T>;
  onSubmit: SubmitHandler<T>;
  isOpen: boolean;
  onOpenChange: () => void;
}

const FormRenderer = <T extends FieldValues>({
  fields,
  onSubmit,
  isOpen,
  onOpenChange,
}: FormRendererProps<T>) => {
  const { control, handleSubmit } = useForm<T>();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <form
              className="flex flex-col align-middle"
              onSubmit={handleSubmit(onSubmit)}
            >
              <ModalBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {" "}
                  {Object.entries(fields).map(([name, field]) => (
                    <Controller
                      key={name}
                      control={control}
                      defaultValue={"" as PathValue<T, Path<T>>}
                      name={name as Path<T>}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <div>
                          {field.type === "select" ? (
                            <Dropdown className="w-full">
                              <DropdownTrigger className="w-full">
                                <Button
                                  className="capitalize"
                                  variant="bordered"
                                >
                                  {value || field.label}
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu
                                selectedKeys={value}
                                selectionMode="single"
                                onSelectionChange={(keys) => {
                                  const [selectedValue] = [...keys];

                                  onChange(selectedValue);
                                }}
                              >
                                {Object.entries(field.options!).map(
                                  ([key, optionValue]) => (
                                    <DropdownItem
                                      key={optionValue}
                                      value={optionValue}
                                    >
                                      {optionValue}
                                    </DropdownItem>
                                  ),
                                )}
                              </DropdownMenu>
                            </Dropdown>
                          ) : (
                            <Input
                              required
                              placeholder={field.label.toUpperCase()}
                              type={field.type}
                              value={
                                typeof value === "number"
                                  ? value.toString()
                                  : value
                              }
                              onBlur={(e) => {
                                onBlur();
                                // Additional onBlur logic if necessary
                              }}
                              onChange={onChange}
                              {...field.attributes}
                            />
                          )}
                        </div>
                      )}
                    />
                  ))}
                </div>
              </ModalBody>
            </form>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button className="mt-4" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default FormRenderer;
