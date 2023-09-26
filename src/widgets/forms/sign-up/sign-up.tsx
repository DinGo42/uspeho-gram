import {
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  SIGN_UP_FORM_MESSAGES,
  type SignUpSchema,
  Widget,
  signUpSchema,
} from "gram/shared";
import { ErrorStyleType } from "gram/shared/components/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { LogoIcon } from "public/svgs";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    const res = await signIn("credentials", {
      data,
      redirect: false,
    });
    if (res && !res.error) await router.push("/");
    else console.log(res, res?.error);
  };

  return (
    <Widget className="w-96 items-center gap-10 bg-black-700">
      <LogoIcon />
      <span className="text-center text-4xl text-black-200">
        Sign up to telegram
      </span>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <Input
          type="text"
          placeholder={SIGN_UP_FORM_MESSAGES.FIRSTNAME_PLACEHOLDER}
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.firstName}
          inputMessage="test"
          inputStyleType={InputStyleType.FORM}
          {...register("firstName")}
        >
          <p className="text-red-700">{errors.firstName?.message}</p>
        </Input>
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.lastName}
          type="text"
          placeholder="Dudeovich"
          inputMessage="last name"
          inputStyleType={InputStyleType.FORM}
          {...register("lastName")}
        >
          <p className="text-red-700">{errors.lastName?.message}</p>
        </Input>
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.username}
          placeholder="DinGo"
          inputMessage="@username"
          type="text"
          inputStyleType={InputStyleType.FORM}
          {...register("username")}
        />
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.password}
          inputMessage="password"
          textDisplaySwitch={true}
          placeholder="qwerty"
          type={"text"}
          inputStyleType={InputStyleType.FORM}
          {...register("password", {
            required: {
              message: `You have to come up with a password`,
              value: true,
            },
            maxLength: 27,
            minLength: 4,
          })}
        >
          <p className="text-sm text-red-500">{errors.password?.message}</p>
        </Input>
        <Button type="submit" buttonStyleType={ButtonStyleType.SUBMIT}>
          Submit
        </Button>
      </form>
    </Widget>
  );
};
