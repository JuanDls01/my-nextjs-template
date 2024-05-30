import { Language } from "@/i18n-config";
import Navbar from "@/packages/ui/components/Navbar/Navbar";
import React from "react";

type LayoutProps = { children: React.ReactNode; params: { lang: Language } };

const Layout = ({ children, params }: LayoutProps) => {
  return (
    <section>
      <Navbar lang={params.lang} />
      {children}
    </section>
  );
};

export default Layout;
