import {
  Grid,
  useTheme,
} from '@mui/material'

import Content from './components/Content';

const App = () => {
  const theme = useTheme()

  return (
    <Grid container>
      <Content />
    </Grid>
  );
}

export default App;