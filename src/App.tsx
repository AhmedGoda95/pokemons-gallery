import { ThemeProvider } from "@mui/material";

import { CustomRouting } from "./routing";
import theme from "./theme";
// import { PokemonsProvider } from "./context/pokemonsContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <PokemonsProvider> */}
      <CustomRouting />
      {/* </PokemonsProvider> */}
    </ThemeProvider>
  );
}

export default App;
