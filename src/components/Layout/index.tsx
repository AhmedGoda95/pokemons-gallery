import { FC, ReactElement } from "react";

import Header from "../Header";
import Content from "../content";
import { PokemonsProvider } from "../../context/pokemonsContext";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <PokemonsProvider>
      <Header />
      <Content>{children}</Content>
    </PokemonsProvider>
  );
};

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export default Layout;
