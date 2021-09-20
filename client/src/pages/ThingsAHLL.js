import React from 'react';
import { Card, CardContent, CardHeader, Header } from 'semantic-ui-react';
import ListLoader from '../components/ListLoader';
import styled from 'styled-components';
import ContactButtons from '../components/ContactButtons';
import { primaryColor } from '../components/Colors';

const ThingsAHLL = () => {
  return (
    <div>
      <h1>Things Using Axios Hook and List Loader</h1>
      <ListLoader
        url="/api/things"
        renderData={(t) => {
          return (
              <CardSpace>
                <CardContent>
                  <CardHeader>Name: {t.name}</CardHeader>
                  <Card.Meta>works in -job-</Card.Meta>
                  <ContactButtons />
                </CardContent>
              </CardSpace>
          );
        }}
        />
    </div>
  );
};

export default ThingsAHLL;

const CardSpace = styled(Card)`
  margin: 25px !important;
` 
