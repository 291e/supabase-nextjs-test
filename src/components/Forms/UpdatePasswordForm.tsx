"use client";

import { updatePassword } from "@/utils/supabase/actions";
import { useActionState } from "react";

const UpdatePasswordForm = () => {
  const [state, formAction, isPending] = useActionState(updatePassword, null);
  return (
    <form action={formAction} className="flex flex-col gap-2 max-w-40">
      <input
        className="border rounded px-2.5 py-2 text-gray-700"
        type="password"
        name="password"
        placeholder="password"
      />

      <button disabled={isPending} className="border rounded px-2.5 py-2">
        {isPending ? "Processing" : "Update Password"}
      </button>
      {state && <span>{state.message}</span>}
    </form>
  );
};

export default UpdatePasswordForm;
