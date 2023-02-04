import Box from "@mui/material/Box";
import { FC } from "react";

import ImagePreviewer from "../../../../components/ImagePreviewer";
import PokemonTypes from "../../components/PokemonTypes";
import PokemonName from "./PokemonName";

const Header: FC<HeaderProps> = ({ name, types, photoUrl }) => {
  return (
    <Box
      sx={(theme) => ({
        display: {
          sm: "flex",
        },
        alignItems: "center",
        marginBottom: theme.spacing(4),
      })}
    >
      <ImagePreviewer
        name={name}
        itemStyle={{ maxWidth: "100%" }}
        containerStyle={{ width: 100 }}
        src={photoUrl}
      />

      <Box
        ml={{
          xs: 0,
          sm: 8,
        }}
      >
        <PokemonName name={name} />
        <PokemonTypes types={types} />
      </Box>
    </Box>
  );
};

interface HeaderProps {
  name: string;
  types: Record<string, any>[];
  photoUrl: string;
}

export default Header;
