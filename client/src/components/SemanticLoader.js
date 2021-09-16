import { Image, Loader, Segment, Dimmer  } from 'semantic-ui-react';

const SemanticLoader = () => {
  return (
  <>
    <Segment inverted>
      <Loader active inverted />
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>

    <Loader active inline='centered' />
  </>
  );
};

export default SemanticLoader;