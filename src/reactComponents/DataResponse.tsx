import React from "react";
import { ApiResponse } from "../zodSchemas/ApiResponseSchema.ts";
// import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"

const DataResponse: React.FunctionComponent<{ apiResponse: ApiResponse }> = ({
  apiResponse,
}) => (
  <table className="results">
    <tbody>
      <tr className="phoneticsRow">
        {apiResponse.map((apiResponse) => (
          <>
            <th>
              {apiResponse.phonetics.map((phonetic) => (
                <p key={`${phonetic.text} ${phonetic.audio}`}>
                  {phonetic.text}
                </p>
              ))}
            </th>
          </>
        ))}
      </tr>
      <tr className="meaningsRow">
        {apiResponse.map((apiResponse) => (
          <>
            <td>
              {apiResponse.meanings.map((meaning) =>
                meaning.definitions.map((definition) => (
                  <p
                    className="definitionText"
                    key={`${definition.definition}`}
                  >
                    {definition.definition}
                  </p>
                ))
              )}
            </td>
          </>
        ))}
      </tr>
    </tbody>
  </table>
);

export { DataResponse };
