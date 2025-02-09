"use client";  

import { usePathname } from "next/navigation";
import HeaderComponent from "./Header.jsx";
import FooterComponent from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const noHeaderFooterPaths = ['/login', '/signup'];

  const isNoHeaderFooter = noHeaderFooterPaths.includes(pathname);

  return (
    <>
      {!isNoHeaderFooter && <HeaderComponent />}
      {children}
      {!isNoHeaderFooter && <FooterComponent />}
    </>
  );
}
