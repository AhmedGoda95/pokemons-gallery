import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        height: 75,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: {
          xs: theme.spacing(1),
          sm: theme.spacing(3),
        },
        color: theme.palette.grey[100],
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        boxSizing: "border-box",
        boxShadow: "0 3px 5px 0 rgb(0 0 0 / 20%)",
        zIndex: 100,
      })}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <Typography
          ml={3}
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Pokemon Gallery
        </Typography>
      </Box>

      <SearchBox />
    </Box>
  );
};

export default Header;
