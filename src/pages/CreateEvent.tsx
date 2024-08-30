import { Container } from '../components/container/Container';
import { Form } from '../components/form/Form';
import { Title } from '../components/title/Title';

export const CreateEvent: React.FC = () => {
  return (
    <Container maxWidth="tablet">
      <Title tag="h2" text="Create your event" />
      <Form />
    </Container>
  );
};
