import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { darkTheme } from "./themes";
import AppLayout from './AppLayout';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  )
}

export default App;