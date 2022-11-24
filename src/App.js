import LibraryTable from "./components/LibraryTable";
import Box from "@mui/material/Box";
import AddBookForm from "./components/AddBookForm";
import Grid from "@mui/material/Grid";
import { books } from "./Database/db";
import { useState } from "react";
import Stack from '@mui/material/Stack';

function App() {
  const [booksDB, setBooksDB] = useState(books);

  return (
    <div>
      <Box sx={{ flexGrow: 1, alignSelf: "center" }}>
        <Stack direction="row" spacing={2}>
          <LibraryTable booksDB={booksDB} setBooksDB={setBooksDB} />
          <AddBookForm booksDB={booksDB} setBooksDB={setBooksDB} />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
