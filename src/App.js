import {
  Container,
} from '@mui/material'

import Nav from './components/Nav';
import Content from './components/Content/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Container className="fromApp" maxWidth={false}>
        <Nav />
        <Content />
        <Footer />
      </Container>
    </>
  );
}

export default App;