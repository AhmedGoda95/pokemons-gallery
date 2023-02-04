import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FC } from "react";

import PokemonItem from "./PokemonItem";

const PokemonsList: FC<PokemonsListProps> = ({ pokemons }) => {
  return (
    <Box>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3, lg: 4 }}
        columnSpacing={{ sm: 2, md: 3, lg: 5 }}
      >
        {pokemons.map((pokemon, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PokemonItem pokemon={pokemon} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

interface PokemonsListProps {
  pokemons: Record<string, any>[];
}

export default PokemonsList;
