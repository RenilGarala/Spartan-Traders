import { z } from "zod";

export const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(100),
  subject: z.string().min(2, "Subject must be at least 2 characters").max(200),
  email: z.string().email("Please enter a valid email address").max(50),
  message: z.string().min(2, "Message must be at least 2 characters").max(500),
});
