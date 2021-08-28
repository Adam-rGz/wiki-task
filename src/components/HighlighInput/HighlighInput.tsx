import React from 'react';
import { Grid, TextField } from '@material-ui/core';


//kentcdodds

const HighlighInput = (props: { textLabel: string; fullWidth: boolean; widthClass: any; setCurrentHighlightValue: React.Dispatch<React.SetStateAction<string>>;}) => {
  
  

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const string = event.target.value.toLowerCase();
    props.setCurrentHighlightValue(string);
  }

  return (
    <Grid  xs={props.widthClass} item>
      <TextField label={props.textLabel} fullWidth={props.fullWidth} onChange={handleChange}/>
    </Grid>
  );
}

export default (HighlighInput);
