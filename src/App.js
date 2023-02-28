import {
  Container,
} from '@mui/material'

import Nav from './components/Nav';
import Content from './components/Content/Content';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  return (
    <>
      <Container className="fromApp" maxWidth={false}>
        {/* <Nav /> */}
        {/* <About /> */}
        <Content />
        <Footer />
      </Container>
    </>
  );
}

export default App;