import Chip from "@mui/material/Chip";
import { FC } from "react";

const PokemonTypes: FC<PokemonTypesProps> = ({ types = [] }) => {
  return (
    <>
      {types.length
        ? types.map((type, index) => {
            return (
              <Chip
                key={index}
                sx={(theme) => ({
                  marginRight: theme.spacing(1),
                  marginBottom: theme.spacing(1),
                  backgroundColor: "#00D700",
                  color: theme.palette.grey[900],
                  fontWeight: 500,
                  fontSize: 15,
                })}
                label={type.type.name}
              />
            );
          })
        : null}
    </>
  );
};

interface PokemonTypesProps {
  types?: Record<string, any>[];
}

export default PokemonTypes;
