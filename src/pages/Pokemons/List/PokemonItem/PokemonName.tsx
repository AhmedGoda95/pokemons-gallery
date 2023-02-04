import Typography from "@mui/material/Typography";
import { FC } from "react";

const PokemonName: FC<PokemonNameProps> = ({ name }) => {
  return (
    <Typography
      sx={(theme) => ({
        color: theme.palette.grey[900],
        fontWeight: 600,
        marginBottom: theme.spacing(1),
      })}
    >
      {name}
    </Typography>
  );
};

interface PokemonNameProps {
  name: string;
}

export default PokemonName;
