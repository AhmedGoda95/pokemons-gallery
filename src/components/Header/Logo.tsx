import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Box
      sx={{
        width: 125,
      }}
    >
      <Link to="/">
        <img src={logo} alt="pokemon logo" style={{ maxWidth: "100%" }} />
      </Link>
    </Box>
  );
};

export default Logo;
