import { Message } from 'semantic-ui-react';

const SemanticLoadError = ({ header, error }) => {
  return (
    <Message negative>
      <Message.Header>{header}</Message.Header>
      <code>{JSON.stringify(error)}</code>
    </Message>
  );
};

export default SemanticLoadError;

