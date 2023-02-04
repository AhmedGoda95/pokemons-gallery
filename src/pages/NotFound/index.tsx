import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h2">Page not found</Typography>
    </Box>
  );
};

export default NotFound;
