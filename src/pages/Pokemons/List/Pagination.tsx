import Box from "@mui/material/Box";

import CustomButton from "../../../components/CustomButton";
import { usePokemons } from "../../../context/pokemonsContext";

const Pagination = () => {
  const { disabledNextBtn, disabledPrevBtn, handlePagination } = usePokemons();

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
        disabled={disabledPrevBtn}
      />
      <CustomButton
        handleClick={handlePagination}
        title="Next"
        disabled={disabledNextBtn}
      />
    </Box>
  );
};

export default Pagination;
