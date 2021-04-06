import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/vsDark';
import Loadable from 'react-loadable';
import LoadingProvider from './loading';

/** Removes the last token from a code example if it's empty. */
function cleanTokens(tokens) {
  const tokensLength = tokens.length;

  if (tokensLength === 0) {
    return tokens;
  }
  const lastToken = tokens[tokensLength - 1];

  if (lastToken.length === 1 && lastToken[0].empty) {
    return tokens.slice(0, tokensLength - 1);
  }
  return tokens;
}

const LoadableComponent = Loadable({
  loader: () => import('./LiveProvider'),
  loading: LoadingProvider,
});

/* eslint-disable react/jsx-key */
const CodeBlock = ({ children: exampleCode, ...props }) => {
  if (props['react-live']) {
    return <LoadableComponent code={exampleCode} />;
  } else {
    return (
      <Highlight>
      </Highlight>
    );
  }
};

export default CodeBlock;
