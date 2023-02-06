import { ThemeProvider } from "@mui/material";

import { CustomRouting } from "./routing";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomRouting />
    </ThemeProvider>
  );
}

export default App;
