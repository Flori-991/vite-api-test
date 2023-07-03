import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const pages = ["Dictionary", "Help"];

const ResponsiveAppBar = () => (
  <AppBar position="static">
    <Container maxWidth={false}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: "flex",
            fontSize: "2rem",
            fontWeight: 700,
            minWidth: "fit-content",
            color: "primary.main",
            ":hover": {
              textDecoration: "underline",
              color: "primary.main",
            },
          }}
        >
          Home Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          {pages.map((page) => (
            <Button
              key={page}
              // onClick={() => {}}
              sx={{ mt: 0.75, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export { ResponsiveAppBar };
