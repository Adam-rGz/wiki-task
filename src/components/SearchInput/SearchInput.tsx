import React from 'react';
import { Grid, TextField } from '@material-ui/core';


//kentcdodds

const SearchInput = (props: { textLabel: string; fullWidth: boolean; widthClass: any; setSearchingQuery: React.Dispatch<React.SetStateAction<string>>; }) => {

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const string = event.target.value.toLowerCase();
    props.setSearchingQuery(string)
  }

  return (
    <Grid spacing={2} xs={props.widthClass}>
      <TextField label={props.textLabel} fullWidth={props.fullWidth} onChange={handleChange} />
    </Grid>
  );
}

export default (SearchInput);
