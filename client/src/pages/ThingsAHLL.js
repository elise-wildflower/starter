import React from 'react';
import { Card } from 'semantic-ui-react';
import ListLoader from '../components/ListLoader';

const ThingsAHLL = () => {
  return (
    <div>
      <h1>Things Using Axios Hook and List Loader</h1>
      <ListLoader
        url="/api/things"
        renderData={(t) => {
          return (
            <Card>
              <p>Name: {t.name}</p>
            </Card>
          );
        }}
        />
    </div>
  );
};

export default ThingsAHLL;