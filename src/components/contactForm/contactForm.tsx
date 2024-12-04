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
import { BaseSyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(0).max(50),
  email: z.string(),
  comment: z.string().optional(),
});

export default function ContactForm() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (
    data: { name: string; email: string; comment?: string | undefined },
    e?: BaseSyntheticEvent<object, any, any>
  ) => {
    e?.preventDefault();

    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const emailjsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
    try {
      const res = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        formInput,
        emailjsUserId
      );

      if (res.status === 200) {
        console.log("Email sent", res);
        toast.success("Email sent successfully!");
        // reset form
        setFormInput({
          name: "",
          email: "",
          comment: "",
        });
      }
    } catch (error) {
      console.error("Error sending email", error);
      toast.error("Failed to send email. Please try again.");
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
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-full min-w-80 border-slate-700"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
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
          name="email"
          render={({ field }) => (
            <FormItem>
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
          name="comment"
          render={({ field }) => (
            <FormItem>
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
