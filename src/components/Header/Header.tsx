import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import SearchInput from '../SearchInput/SearchInput';
import HighlighInput from '../HighlighInput/HighlighInput';
import HighlightButton from '../HighlightButton/HighlightButton';



const Header = (props: { setSearchingQuery: React.Dispatch<React.SetStateAction<string>>; currentHighlightValue: string; setCurrentHighlightValue: React.Dispatch<React.SetStateAction<string>>; setHighlightValue: React.Dispatch<React.SetStateAction<string>>; }) => {
  return (
    <Box p={2}>
      <Typography variant="h5">
        Wyszukiwarka Wikipedii
      </Typography>
      <Box p={2}>
        <SearchInput textLabel="Tekst szukaj" fullWidth={true} widthClass={12} setSearchingQuery={props.setSearchingQuery}  />
      </Box>

      <Box p={2}>
        <Grid container justifyContent="flex-end">
          <HighlighInput textLabel="Tekst podświetlenia" fullWidth={true} widthClass={6} setCurrentHighlightValue={props.setCurrentHighlightValue}/>
          <HighlightButton buttonText="Podświetl wszystkie" setHighlightValue={props.setHighlightValue} currentHighlightValue={props.currentHighlightValue}/>
        </Grid>
      </Box>
    </Box>
  );
}
export default (Header);