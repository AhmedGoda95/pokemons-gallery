import Typography from "@mui/material/Typography";
import { FC } from "react";

const PokemonDescription: FC<PokemonDescriptionProps> = ({ description }) => {
  return (
    <Typography
      variant="body2"
      sx={(theme) => ({
        color: theme.palette.grey[600],
        marginBottom: theme.spacing(2),
      })}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam minus
      voluptas necessitatibus debitis voluptates totam!
    </Typography>
  );
};

interface PokemonDescriptionProps {
  description?: string;
}

export default PokemonDescription;
