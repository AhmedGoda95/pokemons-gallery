import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

const SearchBox = () => {
  return (
    <FormControl
      size="small"
      sx={(theme) => ({
        width: {
          xs: 175,
          md: "auto",
        },
        backgroundColor: "rgba(255,255,255, .25)",
        borderRadius: 1,
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: 0,
        },
      })}
    >
      <OutlinedInput
        placeholder="Search..."
        sx={(theme) => ({
          color: theme.palette.grey[200],
        })}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
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
