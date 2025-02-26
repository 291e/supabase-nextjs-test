"use client";

import { signupWithEmailPassword } from "@/utils/supabase/actions";
import { useActionState } from "react";

const SignUpForm = () => {
  const [error, formAction, isPending] = useActionState(
    signupWithEmailPassword,
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

      <input
        className="border rounded px-2.5 py-2 text-gray-700"
        type="password"
        name="password"
        placeholder="Password"
      />

      <button disabled={isPending} className="border rounded px-2.5 py-2">
        {isPending ? "Processing" : "Sign Up"}
      </button>

      {error && <span>{error.message}</span>}
    </form>
  );
};

export default SignUpForm;
