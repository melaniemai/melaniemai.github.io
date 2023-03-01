
import {
  Container,
} from '@mui/material';
import AppRouter from './AppRouter';

import Nav from './components/Nav';
import Content from './components/Content/Work';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  return (
    <>
      <Container className="fromApp" maxWidth={false}>
        <Nav />
        <AppRouter />
        <Footer />
      </Container>
    </>
  );
}

export default App;