import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface ICredentials {
  email: string;
}

export default NextAuth({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  providers: [
    CredentialsProvider({
      //   credentials: { email: { type: "text" }, password: { type: "text" } },
      authorize: (credentials: ICredentials) => {
        if (credentials.email === "test") {
          return credentials;
        } else {
          throw new Error("error");
        }
      },
    }),
  ],
  jwt: {
    secret: "helllllow",
  },
  //   callbacks: {
  //     redirect({ url, baseUrl }) {
  //       return "/login";
  //     },
  //   },
});
