import { FC, ReactElement } from "react";

import Header from "../Header";
import Content from "../content";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export default Layout;
