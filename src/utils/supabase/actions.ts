"use server";

import { Provider } from "@supabase/supabase-js";
import { createClientForServer } from "./server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const signInWith = (provider: Provider) => async () => {
  const supabase = await createClientForServer();

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  console.log(data);

  if (error) {
    console.log(error);
  }

  redirect(data.url as string);
};

const signInWithGoogle = signInWith("google");

const signupWithEmailPassword = async (prev: any, formData: FormData) => {
  const supabase = await createClientForServer();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  console.log(data);

  if (error) {
    console.log(error);
    revalidatePath("/auth/signup");
    return { message: error.message };
  } else redirect("/");
};

const signinWithEmailPassword = async (prev: any, formData: FormData) => {
  const supabase = await createClientForServer();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  console.log(data);

  if (error) {
    console.log(error);
    revalidatePath("/auth/signin");
    return { message: error.message };
  } else redirect("/");
};

const signOut = async () => {
  const supabase = await createClientForServer();
  await supabase.auth.signOut();
};

export {
  signInWithGoogle,
  signOut,
  signupWithEmailPassword,
  signinWithEmailPassword,
};
