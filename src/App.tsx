import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import { muiThemes } from "./assets/muiThemes.ts";
import { DataResponse } from "./reactComponents/DataResponse.tsx";
import {
  ApiResponse,
  ApiResponseSchema,
} from "./zodSchemas/ApiResponseSchema.ts";

const App = () => {
  const placeHolder = "Look up meanings";
  const [wordToSearch, setWordToSearch] = useState("");
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [apiResponse, setApiResponse] = useState<ApiResponse>();

  const searchOnEnter = async (key: string) => {
    if (key === "Enter") {
      await getDictApiResponse().catch();
    }
  };

  const getDictApiResponse = async () => {
    try {
      const test = await axios.get(apiUrl + wordToSearch);
      setApiResponse(ApiResponseSchema.parse(test.data));
    } catch (e: unknown) {
      // console.warn("Error calling the API!");
    }
  };

  return (
    <ThemeProvider theme={muiThemes}>
      <Stack alignItems="flex-start">
        <Stack className="dictHeader"></Stack>
        <Stack>
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
            Search
          </Button>
        </Stack>
        {apiResponse && <DataResponse apiResponse={apiResponse} />}
      </Stack>
    </ThemeProvider>
  );
};

export { App };
