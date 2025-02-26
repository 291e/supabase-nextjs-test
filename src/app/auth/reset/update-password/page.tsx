import UpdatePasswordForm from "@/components/Forms/UpdatePasswordForm";
import Link from "next/link";

const UpdatePasswordPage = () => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Link href="/auth" className="underline">
        Go to Auth Page
      </Link>
      <h1>Update Password</h1>
      <UpdatePasswordForm />
      <Link href="/" className="underline">
        Go to Home
      </Link>
    </div>
  );
};

export default UpdatePasswordPage;
