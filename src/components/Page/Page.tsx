import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";

import "./Page.scss";

interface PageProps {
  children?: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  const className = "page";

  return (
    <div className={className}>
      <Header />

      {children}

      <Outlet />
    </div>
  );
};
