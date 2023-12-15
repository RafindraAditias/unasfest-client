import { Input, InputFile, PatternInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import LKTISchema from "@/utils/schema/lktiSchema";
import KDBISchema from "@/utils/schema/kdbiSchema";
import LKTIForm from "@/data/form/lktiForm";
import KDBIForm from "@/data/form/kdbiForm";
import SEMNASSchema from "@/utils/schema/semnasSchema";
import SEMNASForm from "@/data/form/semnasForm";

interface LKTIFormRegister {
  schema: typeof LKTISchema;
  formContent: typeof LKTIForm;
}

interface KDBIFormRegister {
  schema: typeof KDBISchema;
  formContent: typeof KDBIForm;
}

interface SEMNASFormRegister {
  schema: typeof SEMNASSchema;
  formContent: typeof SEMNASForm;
}

function RegisterForm({
  schema,
  formContent,
}: LKTIFormRegister | KDBIFormRegister | SEMNASFormRegister) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = form;

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const { formTitle, formDescription, formSpan, formFields } = formContent;

  return (
    <div className="w-full max-w-[744px] m-auto flex flex-col items-center gap-9 md:gap-20">
      <div className="w-[90%] max-w-screen-md text-center">
        <h1 className="text-2xl leading-normal md:text-5xl font-bold md:leading-[70px]">
          Daftar{" "}
          <span className="bg-active-blue text-white p-2 lg:p-4">
            {formSpan}
          </span>
          <br />
          {formTitle}
        </h1>

        <p className="text-[#00000066] text-center text-[14px] leading-normal md:text-2xl font-normal md:leading-[40px] whitespace-pre-wrap">
          {formDescription}
        </p>
      </div>

      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-fit px-5">
          {formFields.map(
            ({
              formName,
              placeholder,
              title,
              type,
              accept,
              description,
              format,
              formInputType,
              subInput,
            }) => {
              switch (formInputType) {
                case "input":
                  return (
                    <FormField
                      key={formName}
                      control={control}
                      name={formName}
                      render={({ field: { name, ref, onChange, onBlur } }) => (
                        <FormItem>
                          <FormLabel>{title}</FormLabel>
                          <FormDescription>{description}</FormDescription>
                          <FormControl>
                            <Input
                              placeholder={placeholder}
                              type={type}
                              accept={accept}
                              name={name}
                              ref={ref}
                              onChange={onChange}
                              onBlur={onBlur}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                case "file_input":
                  return (
                    <FormField
                      key={formName}
                      control={control}
                      name="foto"
                      render={({ field: { name, onBlur, onChange, ref } }) => (
                        <FormItem>
                          <FormLabel>{title}</FormLabel>
                          <FormDescription>
                            {getValues(formName)
                              ? getValues(formName).name
                              : description}
                          </FormDescription>
                          <FormControl>
                            <>
                              {subInput && (
                                <FormField
                                  control={control}
                                  name={subInput.formName}
                                  render={({
                                    field: { name, onBlur, onChange, ref },
                                  }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder={subInput.placeholder}
                                          type={subInput.type}
                                          name={name}
                                          ref={ref}
                                          onChange={onChange}
                                          onBlur={onBlur}
                                          className="mb-4"
                                        />
                                      </FormControl>
                                      <FormMessage className="p-0" />
                                    </FormItem>
                                  )}
                                />
                              )}
                              <InputFile
                                type={type}
                                placeholder={placeholder}
                                name={name}
                                accept={accept}
                                ref={ref}
                                onBlur={onBlur}
                                onChange={(e) => {
                                  e.target.files
                                    ? onChange(e.target.files[0])
                                    : null;
                                }}
                              />
                            </>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                case "pattern_input":
                  return (
                    <FormField
                      key={formName}
                      control={control}
                      name={formName}
                      render={({ field: { name, onBlur, onChange, ref } }) => (
                        <FormItem>
                          <FormLabel>{title}</FormLabel>
                          <FormDescription>{description}</FormDescription>
                          <FormControl>
                            <PatternInput
                              format={format!}
                              type="text"
                              onValueChange={(e) => onChange(e.value)}
                              name={name}
                              getInputRef={ref}
                              onBlur={onBlur}
                              placeholder={placeholder}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
              }
            }
          )}

          <Separator
            orientation="horizontal"
            className="mt-9 bg-[#D9D9D9] h-[1px] my-9"
          />
          <Button
            type="submit"
            className="w-full text-base bg-active-blue rounded-[40px] py-6 md:py-8 md:text-2xl px-0"
          >
            Daftar
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default RegisterForm;
