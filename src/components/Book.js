import * as React from 'react';

//Styling
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Icons
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

export default function BookCard({authorName, bookName, publicationDate, coverPhoto, catalogNumber}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      
      <CardMedia
        component="img"
        height="100"
        image={coverPhoto}
        alt="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {bookName}
        </Typography>
        <Typography gutterBottom variant="h8" component="div">
          {authorName}
        </Typography>
        <Typography gutterBottom variant="h8" component="div">
          {publicationDate}
        </Typography>
        <Typography gutterBottom variant="h8" component="div">
          {catalogNumber}
        </Typography>
      </CardContent>
      <CardActions>

        <IconButton aria-label="delete" size="small">
            <EditIcon fontSize="medium" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="medium" />
        </IconButton>

      </CardActions>
    </Card>
  );
}