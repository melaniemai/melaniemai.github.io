import {
  Grid,
  useTheme,
} from '@mui/material'

import Content from './components/Content';

const App = () => {
  const theme = useTheme()

  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Content />
      </Grid>
    </Grid>
  );
}

export default App;