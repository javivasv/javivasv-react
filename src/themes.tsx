import { createTheme } from '@mui/material/styles';

const basicPalette = {
  primary: {
    main: '#3fc915be',
  },
  secondary: {
    main: '#1685C5',
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...basicPalette,
  },
  typography: {
    button: {
      textTransform: 'none'
    },
  },
});