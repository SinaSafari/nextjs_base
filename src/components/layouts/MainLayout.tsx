import React from "react";
import { MainFooter } from "@/components/layouts/footers/MainFooter";
import { MainHeader } from "@/components/layouts/headers/MainHeader";
import Header from "./headers/ChakraSample";
import Footer from "./footers/ChakraSample";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </>
  );
};
