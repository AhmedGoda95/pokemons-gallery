import Box from "@mui/material/Box";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import PokemonDescription from "./PokemonDescription";
import PokemonName from "./PokemonName";
import PokemonTypes from "../../components/PokemonTypes";
import ImagePreviewer from "../../../../components/ImagePreviewer";
import { API_ENDPOINT } from "../../../../config";

const PokemonItem: FC<PokemonItemProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const redirectToPokemonDetails = () => {
    const pokemonId = pokemon.url.replace(API_ENDPOINT, ""); // /id/
    navigate(`/pokemon${pokemonId}`);
  };
  return (
    <Box
      sx={(theme) => ({
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
      })}
      onClick={redirectToPokemonDetails}
    >
      <ImagePreviewer
        name={pokemon.name}
        itemStyle={{ width: "auto", maxHeight: "50%" }}
        containerStyle={(theme: any) => ({
          backgroundColor: theme.palette.grey[100],
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      />
      <Box
        sx={(theme) => ({
          padding: theme.spacing(2),
        })}
      >
        <PokemonName name={pokemon.name} />
        <PokemonDescription />
        <PokemonTypes />
      </Box>
    </Box>
  );
};

interface PokemonItemProps {
  pokemon: Record<string, any>;
}

export default PokemonItem;
