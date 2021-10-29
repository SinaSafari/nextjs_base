import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface FromState {
  email: string;
  password: string;
}
interface ISignUp {
  error: string | undefined;
  status: number;
  ok: boolean;
  url: string | null;
}

const LoginPage = () => {
  const [formState, setFromState] = useState<FromState>({
    email: "",
    password: "",
  });
  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await signIn("cred", {
      redirect: false,
      email: formState.email,
      password: formState.password,
    });
    if (!response.error) {
      router.push("/dashboard");
    }
  };

  return <div>login page</div>;
};

export default LoginPage;
