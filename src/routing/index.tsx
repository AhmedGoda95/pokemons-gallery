import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "../components/Header";
import Layout from "../components/Layout";
import Pokemons from "../pages/Pokemons/List";
import PokemonDetails from "../pages/Pokemons/PokemonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Pokemons />
      </Layout>
    ),
  },
  {
    path: "/pokemon/:pokemonId",
    element: (
      <Layout>
        <Header />
        <PokemonDetails />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <Header />
        <>Errorrrrrrrrrrrrrs</>
      </Layout>
    ),
  },
]);

export const CustomRouting = () => {
  return <RouterProvider router={router} />;
};
