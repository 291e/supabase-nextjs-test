import SignUpForm from "@/components/Forms/SignUpForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Link href="/auth" className="underline">
        Go to Auth Page
      </Link>
      <h1>Sign Up</h1>
      <SignUpForm />
      <Link href="/auth/signin" className="underline">
        Go to Sign In Page
      </Link>
    </div>
  );
};

export default SignUpPage;
