import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { LayoutProps } from "../App/App.types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};
