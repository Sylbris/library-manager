import * as React from "react";
import BookItem from "./BookItem";
import Stack from '@mui/material/Stack';

function LibraryTable({ booksDB, setBooksDB }) {
  return (
    <Stack>
      {booksDB.map((item) => (
        <BookItem
          key={item.catalogNumber}
          id={item.catalogNumber}
          bookName={item.bookName}
          authorName={item.authorName}
          setBooksDB={setBooksDB}
        />
      ))}
    </Stack>
  );
}

export default LibraryTable;
