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
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(0).max(50),
  email: z.string(),
  comments: z.string().optional(),
});

export default function ContactForm() {
  // const [formInput, setFormInput] = useState({
  //   name: "",
  //   email: "",
  //   comment: "",
  // });
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
        <FormField
          control={form.control}
          defaultValue=""
          name="name"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          defaultValue=""
          name="email"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          defaultValue=""
          name="comments"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel>Comment/Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Comments welcomed!"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
