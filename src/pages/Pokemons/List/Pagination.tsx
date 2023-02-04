import Box from "@mui/material/Box";

import CustomButton from "../../../components/CustomButton";
import { usePokemons } from "../../../context/pokemonsContext";

const Pagination = () => {
  const { nextPage, prevPage, handlePagination } = usePokemons();

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: theme.spacing(5),
      })}
    >
      <CustomButton
        handleClick={() => handlePagination(false)}
        title="Previous"
        disabled={prevPage === null}
      />
      <CustomButton
        handleClick={handlePagination}
        title="Next"
        disabled={nextPage === null}
      />
    </Box>
  );
};

export default Pagination;
