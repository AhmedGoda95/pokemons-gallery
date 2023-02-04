import Alert from "@mui/material/Alert";

import ErrorMessage from "../../../components/ErrorMessage";
import PokemonsList from "./PokemonsList";
import { usePokemons } from "../../../context/pokemonsContext";
import Loader from "../../../components/Loader";
import Pagination from "./Pagination";

const Pokemons = () => {
  const { loading, pokemons, error } = usePokemons();

  return (
    <Loader loading={loading}>
      <>
        {error ? (
          <ErrorMessage message={error} />
        ) : pokemons.length ? (
          <>
            <PokemonsList pokemons={pokemons} />
            <Pagination />
          </>
        ) : (
          <Alert severity="warning">This is no pokemons fetched!</Alert>
        )}
      </>
    </Loader>
  );
};

export default Pokemons;
