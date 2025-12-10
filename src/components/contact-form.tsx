"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { send } from "@/lib/email";
import { toast } from "sonner";
import { formSchema } from "@/lib/schema";

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      send(values);
      toast.success("Message sent successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/60 via-gray-800/60 to-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
      <div className="mb-6">
        <h4 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Send Us a Message
        </h4>
        <p className="text-gray-300 text-sm md:text-base">
          Fill out the form below and we&apos;ll get back to you promptly with a
          detailed response and next steps.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      className="bg-white/5 border border-white/20 rounded-lg p-3 text-sm md:text-base"
                      {...field}
                    />
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
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      className="bg-white/5 border border-white/20 rounded-lg p-3 text-sm md:text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Brief description"
                    className="bg-white/5 border border-white/20 rounded-lg p-3 text-sm md:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Please provide details..."
                    className="bg-white/5 border border-white/20 rounded-lg p-3 text-sm md:text-base h-28 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full px-6 py-3 text-sm md:text-base bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-semibold"
          >
            SEND MESSAGE
          </Button>
        </form>
      </Form>
    </div>
  );
}
