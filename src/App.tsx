import { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  ApiResponse,
  ApiResponseSchema,
} from "./zodSchemas/ApiResponseSchema.ts";
import { DataResponse } from "./reactComponents/DataResponse.tsx";

function App() {
  const placeHolder = "Look up meanings";
  const [wordToSearch, setWordToSearch] = useState("");
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [apiResponse, setApiResponse] = useState<ApiResponse>();

  const searchOnEnter = (key: string) => {
    if (key === "Enter") {
      getDictApiResponse().catch();
    }
  };

  const getDictApiResponse = async () => {
    try {
      const test = await axios.get(apiUrl + wordToSearch);
      setApiResponse(ApiResponseSchema.parse(test.data));
    } catch (e: unknown) {
      console.warn("Error calling the API!");
    }
  };

  return (
    <div className="App">
      <div className="dictHeader"></div>
      <div className="searchBar">
        <input
          placeholder={placeHolder}
          onKeyDown={(event) => searchOnEnter(event.key)}
          onChange={(event) => setWordToSearch(event.target.value)}
          id="searchBarInput"
        />
        <button onClick={() => getDictApiResponse()} id="searchButton">
          Search
        </button>
      </div>
      {apiResponse && <DataResponse apiResponse={apiResponse} />}
    </div>
  );
}

export default App;
