import { FC, ReactElement } from "react";
import Box from "@mui/material/Box";

const CustomCard: FC<CustomCardProps> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[50],
        padding: {
          sm: `${theme.spacing(8)} ${theme.spacing(5)}`,
          xs: `${theme.spacing(4)} ${theme.spacing(2)}`,
        },
        borderRadius: 2,
        boxShadow:
          "0 10px 10px 0 rgb(0 0 0 / 20%), 0 6px 15px 0 rgb(0 0 0 / 19%) !important",
        minHeight: 500,
      })}
    >
      {children}
    </Box>
  );
};

interface CustomCardProps {
  children: ReactElement;
}

export default CustomCard;
