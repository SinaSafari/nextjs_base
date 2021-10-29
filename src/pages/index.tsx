import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { signIn, useSession, signOut } from "next-auth/react";
import React from "react";

const Home: NextPage = () => {
  const clickHandler = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email: "test",
    });
    if (res && res.error) {
      console.log("error");
    } else {
      console.log("not error");
    }
  };

  const { data: session, status } = useSession();
  return (
    <>
      <Button id="login-btn" color="white" bg="blue" onClick={clickHandler}>
        لاگین
      </Button>
      <Button
        id="logout-btn"
        color="white"
        bg="blue"
        onClick={() => signOut({ redirect: false })}
      >
        لاگ اوت
      </Button>
      <p>{JSON.stringify(session)}</p>
      <p>{status}</p>
    </>
  );
};

export default Home;
