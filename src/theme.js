import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
        main: '#87CEFA',
        contrastText: '#fff',
    },
    secondary: {
      main: '#FFC0CB',
    },
    // error: {
    //   main: red.A400,
    // },
  },
});

export default theme;