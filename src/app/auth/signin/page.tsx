import SignInForm from "@/components/Forms/SignInForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Link href="/auth" className="underline">
        Go to Auth Page
      </Link>
      <h1>Sign In</h1>
      <SignInForm />
      <Link href="/auth/signup" className="underline">
        Go to Sign Up Page
      </Link>
    </div>
  );
};

export default SignUpPage;
