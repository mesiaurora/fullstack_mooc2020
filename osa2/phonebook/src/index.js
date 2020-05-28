import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
  {
    name: 'John Cook',
    number: '01234546787'
  },
  {
    name: 'Kea Tosss',
    number: '666'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
