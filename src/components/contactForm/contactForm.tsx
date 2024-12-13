"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DetailedHTMLProps,
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  RefAttributes,
  TextareaHTMLAttributes,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(0).max(50),
  email: z.string(),
  comments: z.string().optional(),
});

interface FormType {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  fieldType:
    | ForwardRefExoticComponent<
        DetailedHTMLProps<
          TextareaHTMLAttributes<HTMLTextAreaElement>,
          HTMLTextAreaElement
        > &
          RefAttributes<HTMLTextAreaElement>
      >
    | ForwardRefExoticComponent<
        DetailedHTMLProps<
          InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        > &
          RefAttributes<HTMLInputElement>
      >;
  className?: string;
}

const formFieldData: FormType[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    fieldType: Input,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
    fieldType: Input,
  },
  {
    name: "comments",
    label: "Comments",
    type: "text",
    placeholder: "Comments welcomed!",
    fieldType: Textarea,
    className: "resize-none",
  },
];

export default function ContactForm() {
  const [response, setResponse] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const emailjsUserId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      emailjs
        .sendForm(
          emailjsServiceId,
          emailjsTemplateId,
          e.currentTarget,
          emailjsUserId
        )
        .then(
          (res) => {
            if (res.status === 200) {
              console.log("Email sent", res);
              toast.success("Email sent successfully!");
              setResponse(true);
            } else {
              toast.error("Email failed to send. Please try again.");
              console.log("Email failed to send.", res);
            }
          },
          (err) => {
            console.log(err, "Email failed to send.");
          }
        );
    } catch (error) {
      console.error("Error sending email", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  const clearResponse = () => {
    if (response === true) {
      setResponse(false);
    }
  };

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     console.log(values);
  //     toast(
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(values, null, 2)}</code>
  //       </pre>
  //     );
  //   } catch (error) {
  //     console.error("Form submission error", error);
  //     toast.error("Failed to submit the form. Please try again.");
  //   }
  // }

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        onClick={clearResponse}
        className="max-w-full min-w-80 md:min-w-96"
      >
        {formFieldData.map((data, index) => {
          return (
            <FormField
              key={index}
              control={form.control}
              defaultValue=""
              name={data.name as "name" | "email" | "comments"}
              render={({ field }) => (
                <FormItem className="my-4">
                  <FormLabel>{data.label}:</FormLabel>
                  <FormControl>
                    <data.fieldType
                      placeholder={data.placeholder}
                      type={data.type}
                      {...field}
                      className={data.className}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
