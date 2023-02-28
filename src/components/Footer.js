import {
  Box,
  Divider,
  Container,
  Typography,
  Paper,
  Grid,
  useTheme,
} from '@mui/material'

function Copyright() {
  const theme = useTheme()
  return (
    <Typography 
      textAlign="center"
      sx={{ 
        color: "#fff",
        fontSize: { xs: "0.8rem", md: "1rem" },
      }}
    > 
      {'© '}
      {new Date().getFullYear()}
      {' Melanie Mai'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: "#486c53"
      }}
    >
      <Container>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;