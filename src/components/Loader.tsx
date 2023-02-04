import Box from "@mui/material/Box";
import { FC, ReactElement } from "react";

const Loader: FC<LoaderProps> = ({ loading, children }) => {
  return <Box>{loading ? "loading...." : children}</Box>;
};
interface LoaderProps {
  loading: boolean;
  children: ReactElement;
}

export default Loader;
