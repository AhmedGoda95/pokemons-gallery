import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

import { usePokemons } from "../../context/pokemonsContext";

const SearchBox = () => {
  const { searchPokemons } = usePokemons();

  const [value, setValue] = useState("");

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      searchPokemons(value.trim());
    }
  };
  /**
   * Search with local state which has only 6 items
   * there is no need to list items searched because it's just 6 items on the screen
   */

  return (
    <FormControl
      size="small"
      sx={{
        width: {
          xs: 175,
          md: "auto",
        },
        backgroundColor: "rgba(255,255,255, .25)",
        borderRadius: 1,
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: 0,
        },
      }}
    >
      <OutlinedInput
        placeholder="Search..."
        sx={(theme) => ({
          color: theme.palette.grey[200],
        })}
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              onClick={() => searchPokemons(value.trim())}
              sx={(theme) => ({
                color: theme.palette.grey[300],
              })}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBox;
