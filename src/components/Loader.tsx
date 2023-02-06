import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { FC, ReactElement } from "react";

const Loader: FC<LoaderProps> = ({ loading, children }) => {
  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </Box>
  );
};
interface LoaderProps {
  loading: boolean;
  children: ReactElement;
}

export default Loader;
