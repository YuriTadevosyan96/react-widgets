/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    // Keep in mind that clean up function in useEffect
    // if from previous render so this will help to not make request in every
    // key press if interval between them is less than 500 ms
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const renderedResults = results.map((result) => (
    <div key={result.pageid} className="item">
      <div className="right floated content">
        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button" rel="noreferrer" target="_blank">
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
      </div>
    </div>
  ));

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input className="input" value={term} onChange={onInputChange} type="text" />
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default Search;
