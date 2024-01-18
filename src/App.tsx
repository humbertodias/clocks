import "./App.css";
import Home from "./Home";

import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Clocks
            </Typography>
            {import.meta.env.VITE_APP_VERSION}
            <Link
              target={"_blank"}
              to="https://github.com/humbertodias/clocks"
            >
              <Button color="inherit" endIcon={<GitHubIcon />}></Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Home></Home>
      </Box>
    </>
  );
}

export default App;
