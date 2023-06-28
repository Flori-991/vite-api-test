import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ApiResponse } from "../zodSchemas/ApiResponseSchema.ts";

const DataResponse: React.FunctionComponent<{ apiResponse: ApiResponse }> = ({
  apiResponse,
}) => (
  <Stack className="searchResults">
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {apiResponse.map((apiResponse) => (
              <>
                <TableCell
                  key={`${apiResponse.meanings[0].definitions[0]} ${apiResponse.phonetics[0]}`}
                >
                  {apiResponse.phonetics.map((phonetic) => (
                    <Typography key={`${phonetic.text} ${phonetic.audio}`}>
                      {phonetic.text}
                    </Typography>
                  ))}
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {apiResponse.map((apiResponse) => (
              <>
                <TableCell
                  key={`${apiResponse.phonetics[0]} ${apiResponse.meanings[0].definitions[0]}`}
                >
                  <Typography
                    className="definitionText"
                    key={`${apiResponse.meanings[0].definitions[0].definition}`}
                  >
                    {apiResponse.meanings[0].definitions[0].definition}
                  </Typography>
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Stack>
);

export { DataResponse };
