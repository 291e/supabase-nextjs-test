"use client";

import { sendResetPasswordForEmail } from "@/utils/supabase/actions";
import { useActionState } from "react";

const ResetPasswordForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendResetPasswordForEmail,
    null
  );
  return (
    <form action={formAction} className="flex flex-col gap-2 max-w-40">
      <input
        className="border rounded px-2.5 py-2 text-gray-700"
        type="email"
        name="email"
        placeholder="Email"
      />

      <button disabled={isPending} className="border rounded px-2.5 py-2">
        {isPending ? "Processing" : "Reset Password"}
      </button>
      {state && <span>{state.message}</span>}
    </form>
  );
};

export default ResetPasswordForm;
