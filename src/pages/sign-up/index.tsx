import { PositionElementAbsolutely } from "gram/shared";
import { SignUpForm } from "gram/widgets";
import Link from "next/link";

const SignUp = () => {
  return (
    <PositionElementAbsolutely
      className="items-center justify-center bg-black-700"
      customElemPossitionStyles="flex flex-col"
    >
      <SignUpForm />
      <Link
        href={"/sign-in"}
        className={
          "rounded-md p-3 text-center text-purple-800 hover:bg-gray-800"
        }
      >
        Вже є акаунт?
      </Link>
    </PositionElementAbsolutely>
  );
};
export default SignUp;
