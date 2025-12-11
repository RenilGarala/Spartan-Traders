"use server";
import { z } from "zod";
import { formSchema } from "@/lib/schema";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
      to: [`email@sujalpatel.tech`],
      subject: "message from portfolio",
      react: EmailTemplate({
        fullName: emailFormData.fullName,
        subject: emailFormData.subject,
        email: emailFormData.email,
        message: emailFormData.message,
      }),
    });
    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
