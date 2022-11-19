import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
        main: '#87CEFA',
        contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    // error: {
    //   main: red.A400,
    // },
  },
});

export default theme;