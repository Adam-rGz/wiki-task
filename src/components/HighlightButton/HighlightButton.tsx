import React from 'react';
import { Button } from '@material-ui/core';



const HighlightButton = (props: { buttonText: string; currentHighlightValue: string; setHighlightValue: React.Dispatch<React.SetStateAction<string>>; }) => {

  function handleChange() {
    props.setHighlightValue(props.currentHighlightValue);
  }
  return (
    <Button color="primary" variant="contained" onClick={handleChange}>{props.buttonText}</Button>
  )
}

export default (HighlightButton);