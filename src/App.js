import LibraryTable from "./components/LibraryTable";
import { books } from "./Database/db";
import { useState } from "react";

//Style
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import AddBookForm from "./components/AddBookForm";

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
