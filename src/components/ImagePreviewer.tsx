import Box from "@mui/material/Box";
import { FC } from "react";

const ImagePreviewer: FC<magePreviewerProps> = ({
  name,
  src = "https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png",
  containerStyle = {},
  itemStyle = {},
}) => {
  return (
    <Box sx={containerStyle}>
      <img src={src} alt={name} style={itemStyle} />
    </Box>
  );
};

interface magePreviewerProps {
  name: string;
  src?: string;

  containerStyle?: Record<string, any>;
  itemStyle?: Record<string, any>;
}

export default ImagePreviewer;
