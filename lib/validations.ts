import { email, z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(3, "Full name is required"),
    email: z.string().email("Invalid email address"),
    universityId: z.coerce.number().min(1, "University ID is required"),
    universityCard: z.string().nonempty("University card is required"),
    password: z.string().min(8, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 6 characters"),
});
