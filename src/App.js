import React from 'react';
const { parser } = require('html-metadata-parser');

let findData = async () => {
  var result = await parser('https://www.npmjs.com/package/html-minifier/');
  const response = JSON.stringify(result, null, 3);
  console.log(response);
  console.log('hello');
};
findData();
export default function App() {
  return <>Hello</>;
}
