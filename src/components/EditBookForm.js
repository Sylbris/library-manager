import * as React from 'react';
import logo from '../logo.svg';
import { useState, useRef } from 'react';

//Styling
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

/**
 * Will represent an edit book component.
 * @param {*} param0 
 * @returns 
 */
function EditBookForm({bookItem, booksDB, setBooksDB}) {
    
    const bookNameRef = React.useRef()
    const authorNameRef = React.useRef()
    const catalogIdRef = React.useRef()
    const publishDateRef = React.useRef()
    const coverUrlRef = React.useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newBook= {
            bookName:bookNameRef.current?.value, authorName:authorNameRef.current?.value, catalogId:catalogIdRef.current?.value
            , publishDate:publishDateRef.current?.value, coverUrl:coverUrlRef.current?.value
        }; 

        setBooksDB(prev => [...prev, newBook]);
        
      };

    
    return (
        <Grid container spacing={2} sx={{width:600}}>
            <Grid item xs={6}>
                <img src={logo} ></img>
            </Grid>
            <Grid item xs={6}>

                <TextField
                    required
                    id="bookName"
                    label="Required"
                    inputRef={bookNameRef}

                    >{bookItem.authorName}</TextField>

                <TextField
                    required
                    id="authorName"
                    label="Required"
                    inputRef={authorNameRef}
                    />
                <TextField
                    required
                    id="catalogId"
                    label="Required"
                    inputRef={catalogIdRef}
                    />
                <TextField
                    required
                    id="publishDate"
                    label="Required"
                    inputRef={publishDateRef}
                    />
                <TextField
                    required
                    id="coverUrl"
                    label="Required"
                    inputRef={coverUrlRef}
                    />
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </Grid>
      </Grid>
    );
  }
  
  export default AddBookForm;