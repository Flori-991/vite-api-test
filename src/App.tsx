import { CircularProgress, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./App.css";
import { muiThemes } from "./assets/muiThemes.ts";
import { DataResponse } from "./reactComponents/DataResponse.tsx";
import { MainMenu } from "./reactComponents/MainMenu.tsx";
// import { MainTabControl } from "./reactComponents/MainTabControl.tsx";
import {
  ApiResponse,
  ApiResponseSchema,
} from "./zodSchemas/ApiResponseSchema.ts";

const App = () => {
  const placeHolder = "Look up meanings";
  const [wordToSearch, setWordToSearch] = useState("");
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [apiResponse, setApiResponse] = useState<ApiResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const searchOnEnter = async (key: string) => {
    if (key === "Enter") {
      await getDictApiResponse().catch();
    }
  };

  const getDictApiResponse = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(apiUrl + wordToSearch);
      const json = await response.json();
      setApiResponse(ApiResponseSchema.parse(json));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={muiThemes}>
      <Stack alignItems="center">
        <Stack className="dictHeader">
          <MainMenu />
        </Stack>
        {/* <MainTabControl /> */}
        <Stack
          padding="1rem 0"
          alignItems="center"
          flexDirection="row"
          gap="0.25rem"
        >
          <TextField
            label={placeHolder}
            variant="standard"
            onKeyDown={(event) => searchOnEnter(event.key)}
            onChange={(event) => setWordToSearch(event.target.value)}
            id="searchBarInput"
          />
          <Button
            className="searchButton"
            variant="outlined"
            onClick={() => getDictApiResponse()}
            id="searchButton"
          >
            <Typography variant="button">Search</Typography>
          </Button>
        </Stack>
        {isError ? (
          <Typography variant="caption">Something went wrong ...</Typography>
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          apiResponse && <DataResponse apiResponse={apiResponse} />
        )}
      </Stack>
    </ThemeProvider>
  );
};

export { App };
