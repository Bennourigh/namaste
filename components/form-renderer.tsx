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
  ExtractFormFieldType,
  filterValidInputProps,
  FormField,
} from "@/types/generic-form.types";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

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
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col align-middle"
            >
              <ModalBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {" "}
                  {Object.entries(fields).map(([name, field]) => (
                    <Controller
                      key={name}
                      control={control}
                      name={name as Path<T>}
                      defaultValue={"" as PathValue<T, Path<T>>}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <div>
                          {field.type === "select" ? (
                            <Dropdown className="w-full">
                              <DropdownTrigger className="w-full">
                                <Button
                                  variant="bordered"
                                  className="capitalize"
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
                              type={field.type}
                              value={
                                typeof value === "number"
                                  ? value.toString()
                                  : value
                              }
                              onChange={onChange}
                              onBlur={(e) => {
                                onBlur();
                                // Additional onBlur logic if necessary
                              }}
                              placeholder={field.label.toUpperCase()}
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
              <Button type="submit" className="mt-4">
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
