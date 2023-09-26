import z from "zod";
import { SIGN_UP_FORM_MESSAGES } from "..";
export const signUpSchema = z.object({
  username: z
    .string({
      description: SIGN_UP_FORM_MESSAGES.USERNAME_PLACEHOLDER,
    })
    .max(32, { message: SIGN_UP_FORM_MESSAGES.LARGE_USERNAME })
    .min(1, { message: SIGN_UP_FORM_MESSAGES.SMALL_USERNAME }),
  firstName: z
    .string({
      required_error: SIGN_UP_FORM_MESSAGES.FIRSTNAME_REQIRED,
      description: SIGN_UP_FORM_MESSAGES.FIRSTNAME_PLACEHOLDER,
    })
    .min(1, { message: SIGN_UP_FORM_MESSAGES.SMALL_FIRSTNAME })
    .max(32, { message: SIGN_UP_FORM_MESSAGES.LARGE_FIRSTNAME }),
  lastName: z
    .string({
      required_error: SIGN_UP_FORM_MESSAGES.LASTNAME_REQIRED,
      description: SIGN_UP_FORM_MESSAGES.LASTNAME_PLACEHOLDER,
    })
    .min(1, { message: SIGN_UP_FORM_MESSAGES.SMALL_LASTNAME })
    .max(32, { message: SIGN_UP_FORM_MESSAGES.LARGE_LASTNAME }),
  password: z
    .string({
      description: SIGN_UP_FORM_MESSAGES.PASSWORD_PLACEHOLDER,
      required_error: SIGN_UP_FORM_MESSAGES.PASSWORD_REQIRED,
    })
    .max(90, { message: SIGN_UP_FORM_MESSAGES.LARGE_PASSWORD })
    .min(4, { message: SIGN_UP_FORM_MESSAGES.SMALL_PASSWORD }),
});
export type SignUpSchema = z.infer<typeof signUpSchema>;