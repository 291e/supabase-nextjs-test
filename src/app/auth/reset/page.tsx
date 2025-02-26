import ResetPasswordForm from "@/components/Forms/ResetPasswordForm";
import Link from "next/link";

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Link href="/auth" className="underline">
        Go to Auth Page
      </Link>
      <h1>Reset Password</h1>
      <ResetPasswordForm />
      <Link href="/auth/signin" className="underline">
        Go to Sign In Page
      </Link>
    </div>
  );
};

export default ResetPasswordPage;
