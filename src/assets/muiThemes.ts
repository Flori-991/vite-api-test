import { grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
// import { makeStyles } from "@mui/material";

const muiThemes = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});

// const tableColumnStyle = makeStyles({
//   tableCell: {
//     maxWidth: "50px",
//   },
// });

export { muiThemes };
// export { tableColumnStyle };
