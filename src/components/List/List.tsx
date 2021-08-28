import React from 'react';
import { Grid, Box, CircularProgress, Typography } from '@material-ui/core';
import ResultCard from '../ResultCard/ResultCard';
import { Item } from '../../myTypes';


const List = (props: { searchingResults: Item[]; highlightValue: string; loading: boolean; afterSearch: boolean; }) => {

  return (
    <Box p={4}>
      <Grid container justifyContent="center" spacing={3} >
        {props.loading ? <CircularProgress disableShrink /> : props.searchingResults.map(({
          pageid,
          snippet,
          title,
          timestamp,
        }) =>
        (
          <Grid key={pageid} item xs={6}>
            <ResultCard title={title} description={snippet} time={timestamp} highlightValue={props.highlightValue} />
          </Grid>
        ))
        }
        {!props.loading && props.searchingResults.length === 0 && props.afterSearch ? <Typography variant="h6" gutterBottom>Brak wyników</Typography> : ''}
      </Grid>
    </Box>
  );
}


export default (List);