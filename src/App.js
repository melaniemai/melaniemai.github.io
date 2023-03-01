
import {
  Container,
} from '@mui/material';
import AppRouter from './AppRouter';

import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Container className="fromApp" maxWidth={false}>
        <Nav />
        <AppRouter />
      </Container>
      <Footer />

    </>
  );
}

export default App;