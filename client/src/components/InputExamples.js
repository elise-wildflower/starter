import React from 'react';
import { Header, Input } from 'semantic-ui-react';


const InputExamples = () => (
  <div>
    <Header>Checkout</Header>
      <Input
      action={{
        color: 'teal',
        labelPosition: 'left',
        icon: 'cart',
        content: 'Checkout',
      }}
      actionPosition='left'
      placeholder='Search...'
      defaultValue='52.03'
    />
      <Header>Input with Icon</Header>
      <Input icon='search' placeholder='Search...' />
    </div>

  );

export default InputExamples;
      
      
      
      
      
      
