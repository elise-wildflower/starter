// Add a bunch of possible reusable components - loaders, buttons, cards,
// error messages.  Sort of your own library

import { Message } from "semantic-ui-react";

const SemanticLoadError = ({ header, error }) => {
  return (
    <Message negative>
      <Message.Header>{header}</Message.Header>
      <code>{JSON.stringify(error)}</code>
    </Message>
  );
};
export default SemanticLoadError;