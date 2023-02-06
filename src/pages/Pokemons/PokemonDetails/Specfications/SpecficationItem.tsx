import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const SpecficationItem: FC<SpecficationItemProps> = ({
  paddingBottom = 3,
  value,
  title,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({
          fontSize: {
            xs: "1rem",
            sm: "1.25rem",
          },
          width: {
            xs: 125,
            sm: 200,
          },
          borderRight: `2px solid ${theme.palette.grey[500]}`,
          marginRight: theme.spacing(3),
          paddingRight: theme.spacing(3),
          fontWeight: 800,
          paddingBottom: theme.spacing(paddingBottom),
          color: theme.palette.grey[900],
        })}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={(theme) => ({
          fontSize: {
            xs: "1rem",
            sm: "1.25rem",
          },
          color: theme.palette.grey[700],
        })}
      >
        {value}
      </Typography>
    </Box>
  );
};

interface SpecficationItemProps {
  paddingBottom?: number;
  value: number;
  title: string;
}

export default SpecficationItem;
