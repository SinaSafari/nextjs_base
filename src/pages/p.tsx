import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";

const Private = () => {
  return <div>sadf</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });
  console.log(session);

  if (session) {
    return {
      props: {},
    };
  }

  return {
    props: {},
    redirect: {
      destination: "/",
    },
  };
};

export default Private;
