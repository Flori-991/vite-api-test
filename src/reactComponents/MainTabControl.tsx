// const MainTabControl: React.FunctionComponent<{}> = () => {
//   const [searchTerm, setSearchTerm] = React.useState<string>("");
//   const [apiResponse, setApiResponse] = React.useState<ApiResponse[]>([]);
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);
//   const [isError, setIsError] = React.useState<boolean>(false);
//
//   const handleSearchTermChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSearchTerm(event.target.value);
//   };
//
//   const handleSearch = async () => {
//     setIsLoading(true);
//     setIsError(false);
//     try {
//       const response = await fetch(
//         `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
//       );
//       const json = await response.json();
//       setApiResponse(json);
//     } catch (error) {
//       setIsError(true);
//     }
//     setIsLoading(false);
//   };
//
//   return (
//     <Stack className="mainTabControl">
//       <Stack className="searchBar">
//         <TextField
//           id="outlined-basic"
//           label="Search"
//           variant="outlined"
//           onChange={handleSearchTermChange}
//         />
//         <Button variant="contained" onClick={handleSearch}>
//           Search
//         </Button>
//       </Stack>
//       {isError && <div>Something went wrong ...</div>}
//       {isLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <DataResponse apiResponse={apiResponse} />
//       )}
//     </Stack>
//   );
// };
