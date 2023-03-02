import {
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material"

const About = () => {
  const theme = useTheme();
  return (
    <Box className='fromContent' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',}}>
      <Typography 
        className="title" 
        sx={{ 
          fontFamily: "Work Sans", 
          fontSize: "5vw",
          fontWeight: "700",
          fontStyle: "italic",
        }}
      >
        About Me ,
      </Typography>
      <Container>
        <Typography 
          my={3} 
          sx={{ 
            color: theme.palette.text.secondary, 
            fontSize: "3vw",
            fontFamily: "Playfair Display",
          }}
        >
          I'm currently a 5th year CS student based in the Cincinnati area. 
          After graduating (very soon btw), I'll be working at <a href="https://www.uber.com/us/en/" target="_blank" rel="noreferrer">TENET3</a> as a Software Engineer on the Software Engineering Group. 
        </Typography>
        <Typography
          my={3}
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "3vw",
            fontFamily: "Playfair Display",
          }}
        >
          Over the past couple of years, I've been fortunate enough to work with companies across a variety of specialties, often with the goal of helping other and making the world a better place.
          I'm passionate about building products that make a difference in people's lives. I'm also passionate about learning and growing as a software engineer. 
        </Typography>
        <Typography
          my={3}
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "3vw",
            fontFamily: "Playfair Display",
          }}
        >
          When I'm not working, I'm interested in gaming, baking, listening to music, coffee drinking, cafe hopping, and exploring new places.
        </Typography>
        <Typography
          my={3}
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "3vw",
            fontFamily: "Playfair Display",
          }}
        >
          I'm also always looking for opportunities to learn and grow, so please feel free to reach out!
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
