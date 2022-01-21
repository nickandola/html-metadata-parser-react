import React from 'react';
import parse, { domToReact, htmlToDOM, Element } from 'html-react-parser';

console.log(domToReact);
console.log(htmlToDOM);

const parser = (input) =>
  parse(input, {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs.class === 'remove') {
        return <></>;
      }
    },
  });

export default function App() {
  return (
    <div className="App">
      {parser(`
            <h2 style="font-family: 'Lucida Grande';">
              HTMLReactParser<br class="remove"> loaded withCreate React App
            </h2>
          `)}
    </div>
  );
}
