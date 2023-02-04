import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
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
        <PokemonDetails />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

export const CustomRouting = () => {
  return <RouterProvider router={router} />;
};
