import Typography from "@mui/material/Typography";
import { FC } from "react";

const PokemonName: FC<{ name: string }> = ({ name }) => {
  return (
    <Typography
      variant="h2"
      sx={(theme) => ({
        marginBottom: theme.spacing(2),
      })}
    >
      {name}
    </Typography>
  );
};

export default PokemonName;
