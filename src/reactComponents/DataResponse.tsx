import React from "react";
import { ApiResponse } from "../zodSchemas/ApiResponseSchema.ts";

const DataResponse: React.FunctionComponent<{ apiResponse: ApiResponse }> = ({
  apiResponse,
}) => (
  <div className="results">
    <div>
      {apiResponse[0].phonetics.map((phonetic) => (
        <p key={`${phonetic.text} ${phonetic.audio}`}>{phonetic.text}</p>
      ))}
    </div>
    <hr />
    <ul className="meanings">
      {apiResponse[0].meanings.map((meaning) =>
        meaning.definitions.map((definition) => (
          <li className="definitionText" key={`${definition.definition}`}>
            {definition.definition}
          </li>
        ))
      )}
    </ul>
  </div>
);

export { DataResponse };
