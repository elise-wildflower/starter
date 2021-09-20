import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { primaryColor, secondaryColor, terColor } from './Colors';

const ContactButtons = () => {
  return (
    <div>
      <GrayButton animated='vertical'>
        <Button.Content hidden>Phone</Button.Content>
        <Button.Content visible>
          <Icon circular name='phone' />
        </Button.Content>
      </GrayButton>
      <BlueButton animated='vertical'>
        <Button.Content hidden>Email</Button.Content>
        <Button.Content visible>
          <Icon circular name='mail' />
        </Button.Content>
      </BlueButton>
      <GreenButton animated='vertical'>
        <Button.Content hidden>Directions</Button.Content>
        <Button.Content visible>
          <Icon circular name='car' />
        </Button.Content>
      </GreenButton>
      </div>
  );
};

export default ContactButtons;

const BlueButton = styled(Button)`
  background-color: ${terColor} !important;
`
const GrayButton = styled(Button)`
  background-color: ${primaryColor} !important;
`
const GreenButton = styled(Button)`
  background-color: ${secondaryColor} !important;
`

