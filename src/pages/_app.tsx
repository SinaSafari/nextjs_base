import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraRTLProvider, Fonts } from "@/styles/theme";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import { MainLayout } from "@/components/layouts/MainLayout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ChakraRTLProvider>
          <Fonts />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraRTLProvider>
      </Provider>
    </SessionProvider>
  );
}
export default MyApp;
