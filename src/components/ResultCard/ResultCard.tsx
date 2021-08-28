import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const ResultCard = (props: { title: string; description: string; time: string; highlightValue: string; }) => {
  //const
  const regex = /(<([^>]+)>)/ig;

  function getHighlightedText(text: string, highlight: string) {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> {parts.map((part, i) =>
      <span key={i} className={part.toLowerCase() === highlight.toLowerCase() ? 'highlighted' : ''}>
        {part}
      </span>)
    } </span>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {getHighlightedText(props.title.replace(regex, ''), props.highlightValue)}
        </Typography>
        <Typography variant="body2" component="p">
          {getHighlightedText(props.description.replace(regex, ''), props.highlightValue)}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="caption">
          {props.time.substring(0, 10)}
        </Typography>        
      </CardActions>
    </Card>
  );
}

export default (ResultCard);