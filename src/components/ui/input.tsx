import * as React from "react";

import { cn } from "@/lib/tailwind";
import { Button } from "./button";
import { FileText } from "lucide-react";
import { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "./label";
import { ErrorMessage } from "@hookform/error-message";
import { PatternFormat, PatternFormatProps } from "react-number-format";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  description?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, title, description, ...props }, ref) => {
    return (
      <>
        {title ? (
          <Label
            htmlFor={title}
            className="text-base leading-normal md:text-2xl font-semibold md:leading-10 text-black"
          >
            {title}
          </Label>
        ) : null}

        {description ? (
          <p className="text-sm leading-normal md:text-xl font-normal md:leading-10 text-[#00000080] pb-2">
            {description}
          </p>
        ) : null}

        <input
          type={type}
          className={cn(
            `flex h-10 w-full rounded-md text-base md:text-2xl font-normal leading-10 py-8 pl-12 bg-[#D9D9D91A] placeholder:text-[#0000004D] border-2 border-[#00000033] px-3 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300`,
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
Input.displayName = "Input";

export interface PatternInputProps extends PatternFormatProps {
  format: string;
}
const PatternInput = React.forwardRef<HTMLInputElement, PatternInputProps>(
  ({ className, format, ...props }, ref) => {
    return (
      <PatternFormat
        {...props}
        format={format}
        getInputRef={ref}
        placeholder="masukkan nomor whatsapp"
        className={cn(
          "flex h-10 w-full rounded-md text-base md:text-2xl font-normal leading-10 py-8 bg-[#D9D9D91A] placeholder:text-[#0000004D] border-2 border-[#00000033] px-3 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
      />
    );
  }
);
Input.displayName = "Input";

const InputFile = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, accept, title, description, ...props }, ref) => {
    const uploadRef = useRef<HTMLInputElement | null>(null);
    const [uploadedFile, setUploadedFile] = useState<string>("");

    const handleUpload = () => {
      uploadRef.current?.click();
    };

    return (
      <>
        <Button
          type="button"
          className={cn(
            "w-full gap-3 rounded-lg bg-[#004AAD33] text-active-blue text-2xl font-semibold leading-10 p-6 md:p-8",
            className
          )}
          onClick={handleUpload}
        >
          <FileText size={30} className="w-5 md:w-10" />
          <p className="text-sm md:text-xl">{placeholder}</p>
        </Button>

        {uploadedFile ? (
          <p className="text-sm md:text-xl">{uploadedFile}</p>
        ) : null}

        <Input
          type="file"
          onChange={(e) => {
            e.target.files ? setUploadedFile(e.target.files[0].name) : null;
          }}
          title={title}
          description={description}
          placeholder={placeholder}
          accept={accept}
          style={{
            opacity: 0,
            position: "absolute",
            width: 0,
            zIndex: -9999999999,
          }}
          ref={(e) => {
            ref;
            uploadRef.current = e;
          }}
          className="relative"
          {...props}
        />
      </>
    );
  }
);
Input.displayName = "InputFile";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title?: string;
  description?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, title, description, name, placeholder, ...props }, inputRef) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <>
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field: { name, onBlur, onChange, ref, value } }) => {
            return (
              <Input
                onBlur={onBlur}
                onChange={onChange}
                type={type}
                value={value}
                name={name}
                title={title}
                description={description}
                placeholder={placeholder}
                ref={(e) => {
                  ref(e);
                  inputRef;
                }}
                {...props}
              />
            );
          }}
        />

        <div className="mt-1 mb-10">
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className="text-red-500">*{message}</p>}
          />
        </div>
      </>
    );
  }
);
Input.displayName = "FormInput";

const FormInputFile = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, title, description, name, placeholder, accept, ...props },
    forwardedRef
  ) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    const uploadRef = useRef<HTMLInputElement | null>(null);
    const [uploadedFile, setUploadedFile] = useState<string>("");

    const handleUpload = () => {
      uploadRef.current?.click();
    };

    return (
      <>
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field: { name, onBlur, onChange, ref, value } }) => {
            return (
              <Input
                value={value}
                onBlur={onBlur}
                onChange={(e) => {
                  e.target.files
                    ? (setUploadedFile(e.target.files[0].name),
                      onChange(e.target.files[0]))
                    : null;
                }}
                type="file"
                name={name}
                title={title}
                description={description}
                placeholder={placeholder}
                accept={accept}
                style={{
                  opacity: 0,
                  position: "absolute",
                  width: 0,
                  zIndex: -9999999999,
                }}
                ref={(e) => {
                  ref(e);
                  forwardedRef;
                  uploadRef.current = e;
                }}
                className="relative"
                {...props}
              />
            );
          }}
        />
        <Button
          type="button"
          className={cn(
            "w-full gap-3 rounded-lg bg-[#004AAD33] text-active-blue text-2xl font-semibold leading-10 p-6 md:p-8",
            className
          )}
          onClick={handleUpload}
        >
          <FileText size={30} className="w-5 md:w-10" />
          <p className="text-base md:text-xl">{placeholder}</p>
        </Button>

        {uploadedFile ? (
          <p className="text-sm md:text-xl">{uploadedFile}</p>
        ) : null}

        <div className="mb-10">
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className="text-red-500">*{message}</p>}
          />
        </div>
      </>
    );
  }
);
Input.displayName = "FormInputFile";

export { Input, FormInput, FormInputFile, InputFile, PatternInput };
