import { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Content: FC<ContentProps> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        minHeight: "calc(100vh - 200px)",
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(3),
      })}
    >
      <Grid container>
        <Grid item xs={12} sm={10} md={8} xl={6} mx="auto">
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

interface ContentProps {
  children: ReactElement | ReactElement[];
}

export default Content;
