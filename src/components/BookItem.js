import * as React from 'react';

//Styling
import Grid from '@mui/material/Grid';

//Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
/**
 * Single book row
 * @param {*} param0 
 * @returns 
 */
export default function BookItem({id, authorName, bookName, publicationDate, coverPhoto, catalogNumber, booksDB, setBooksDB}) {
    
    const handleDelete = (event) => {
        setBooksDB(prev => prev.filter(book => book.catalogNumber !== id));
      };
    
    const handleEdit = (event) => {
        
    };

    return (
    <Grid container spacing={2} sx={{width:400}}>
        <Grid item xs={10}>
          {bookName} 
        </Grid>
        <Grid item xs={1}>
          <EditIcon onClick={handleEdit}/>
        </Grid>
        <Grid item xs={1}>
          <DeleteIcon onClick={handleDelete}/>
        </Grid>
      </Grid>
  );
}