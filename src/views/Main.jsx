import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import { wikiApi } from '../services/http-client';

const CONST_DELAY = 1000;

const Main = () => {
  //tit
  document.title = "Wyszukiwarka wikipedii"

  const [searchingQuery, setSearchingQuery] = useState('');
  const [searchingResults, setSearchingResults] = useState([]);
  const [highlightValue, setHighlightValue] = useState('');
  const [currentHighlightValue, setCurrentHighlightValue] = useState('');

  const [loading, setLoading] = useState(false);
  const [afterSearch, setafterSearch] = useState(false);

  const checkInput = (inputValue) => {
    if (inputValue === '') {
      return;
    }
    setLoading(true)
    wikiApi(inputValue)
      .then((data) => {
        const { query: { search } } = data;
        setLoading(false);
        setafterSearch(true);
        return search;
      })
      .then((data) => {
        setSearchingResults(data);
        setLoading(false);
        setafterSearch(true);
      })
      .catch(() => {
        console.log('błąd');
        setLoading(false);
        setafterSearch(true);
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      checkInput(searchingQuery);
    }, CONST_DELAY);
    return () => {
      clearInterval(timeout);
    };
  }, [searchingQuery]);

  return (
    <Container maxWidth="md">
      <Header setSearchingQuery={setSearchingQuery} setHighlightValue={setHighlightValue} currentHighlightValue={currentHighlightValue} setCurrentHighlightValue={setCurrentHighlightValue} />
      <List searchingResults={searchingResults} highlightValue={highlightValue} loading={loading} afterSearch={afterSearch}/>
    </Container>
  );
}

export default (Main);