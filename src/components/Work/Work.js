import {
  Box,
  Divider,
  Typography,
  Link,
  useTheme,
} from '@mui/material'
import {
  ArrowOutward,
} from '@mui/icons-material'

import './Work.css';

const Coop = () => {
  const theme = useTheme();
  const coops = [
    {
      id: 1,
      title: "Software Engineer",
      company: "TENET3",
      location: "Dayton, OH",
      date: "July 2023 - Present",
      url: "https://www.tenet3.com/",
    },
    {
      id: 2,
      title: "Software Eng. Intern",
      company: "TENET3",
      location: "Dayton, OH",
      date: "May - Aug '22",
      url: "https://www.tenet3.com/",
    },
    {
      id: 3,
      title: "Software Dev. Co-op",
      company: "Blubrry Podcasting",
      location: "Columbus, OH",
      date: "Jan - Apr '22",
      url: "https://www.blubrry.com/",
    },
    {
      id: 4,
      title: "Software Dev. Co-op",
      company: "Blubrry Podcasting",
      location: "Columbus, OH",
      date: "May - Aug '21",
      url: "https://www.blubrry.com/",
    },
    {
      id: 5,
      title: "Software Eng. Co-op",
      company: "Siemens",
      location: "Milford, OH",
      date: "Aug '20 - Jan '21",
      url: "https://www.siemens.com/us/en/home.html",
    },
    {
      id: 6,
      title: "Software Eng. Co-op",
      company: "Siemens",
      location: "Milford, OH",
      date: "Jan - May '20",
      url: "https://www.siemens.com/us/en/home.html",
    },
  ]

  return (
    <Box className='fromCoop' my={7} sx={{ display: 'flex', flexDirection: 'column',}}>
      <Typography 
        className="title" 
        sx={{ 
          fontFamily: "Playfair Display", 
          fontSize: "2.5vw", 
          fontStyle: "italic",
          color: theme.palette.text.secondary,
        }}
      >
        Places I've interned / worked at
      </Typography>
      {coops.map((coop) => (
        <>
          <Divider 
            className="divider" 
            sx={{ 
              backgroundColor: "#fff", 
              height: "0.1vw", 
              my: "1vw", 
            }} 
          />
          <Box sx={{ display: "flex", direction: "row", flexWrap: "wrap", my: "15px",}}>
            <Typography 
              sx={{ 
                fontFamily: "Work Sans", 
                fontStyle: "italic", 
                color: theme.palette.text.secondary,
                fontSize: "3vw", 
                minWidth: "4vw", 
                marginTop: "-1.25vw", 
                alignSelf: "flex-start"
              }}
            >
              ({coop.id})
            </Typography>
            <Typography 
              className="worktitle" 
              sx={{ 
                fontFamily: "Work Sans",
                fontSize: "6vw", 
                fontWeight: "700", 
                letterSpacing: "-.035em", 
                color: theme.palette.text.secondary,
              }}
            >
              {coop.title}
            </Typography>
            <Box sx={{ display: "flex", direction: "row", marginLeft: "auto" }}>
              <Typography 
                sx={{ 
                  fontFamily: "Work Sans", 
                  fontStyle: "italic", 
                  fontSize: "3vw", 
                  minWidth: "4vw", 
                  marginTop: "-1.25vw", 
                  alignSelf: "flex-start", 
                  color: theme.palette.text.secondary,
                }}
              >
                {coop.date}
              </Typography>
              <Link 
                href={coop.url} 
                underline="hover" 
                sx={{ 
                  alignSelf: "flex-start", 
                  justifyContent: "flex-end"
                }}
              >
                <ArrowOutward className='arrowiconCoop' sx={{ fontSize: "2vw",  minWidth: "4vw", }} />
              </Link>
            </Box>
            <Box sx={{ display: "flex", direction: "row", marginRight: "auto" }}>
              <Typography 
                className="workcompany" 
                margin={"0 4vw"}
                sx={{ 
                  fontFamily: "Work Sans",
                  fontSize: "3vw", 
                  fontWeight: "700", 
                  letterSpacing: "-.035em", 
                  color: theme.palette.text.primary,
                }}
              >
                {coop.company}
              </Typography>
            </Box>
          </Box>
        </>
      ))}
    </Box>
  );
}

const Work = () => {
  const works = [
    {
      id: 1,
      title: "Leaf",
      description: "A starting project working with React components for Leaflet maps..",
      year: "2024",
      url: "https://github.com/melaniemai/leafmap",
    },
    {
      id: 2,
      title: "PAPER",
      description: "A Senior Capstone project created to provide a better solution for paper exams.",
      year: "2023",
      url: "https://github.com/rymandn/SeniorCapstoneProject-CS5001",
    },
    {
      id: 3,
      title: "DigBizCard",
      description: "A small and simple digital business card.",
      year: "2023",
      url: "/digbizcard",
    },
    {
      id: 4,
      title: "StuDB",
      description: "Student database application managing student enrollments and balances.",
      year: "2021",
      url: "https://github.com/melaniemai/student_database_app",
    },
    {
      id: 5,
      title: "View more projects...",
      description: "-",
      year: "-",
      url: "https://github.com/melaniemai",
    },
  ]
  
  const theme = useTheme()

  return (
    <>
      <Box className='fromContent' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',}}>
        <Typography 
          className="title" 
          sx={{ 
            fontFamily: "Playfair Display", 
            fontSize: "2.5vw", 
            fontStyle: "italic",
          }}
        >
          Things I've worked on
        </Typography>
        {works.map((work) => (
          <>
            <Divider 
              className="divider" 
              sx={{ 
                backgroundColor: theme.palette.text.secondary, 
                height: "0.1vw", 
                my: "1vw", 
              }} 
            />
            <Box sx={{ display: "flex", direction: "row", flexWrap: "wrap", my: "15px",}}>
              <Typography 
                sx={{ 
                  fontFamily: "Work Sans", 
                  fontStyle: "italic", 
                  fontSize: "3vw", 
                  minWidth: "4vw", 
                  marginTop: "-1.25vw", 
                  alignSelf: "flex-start"
                }}
              >
                ({work.id})
              </Typography>
              <Typography 
                className="worktitle" 
                sx={{ 
                  fontFamily: "Work Sans",
                  fontSize: "8vw", 
                  fontWeight: "700", 
                  letterSpacing: "-.035em", 
                }}
              >
                {work.title}
              </Typography>
              <Box sx={{ display: "flex", direction: "row", marginLeft: "auto" }}>
                <Typography 
                  sx={{ 
                    fontFamily: "Work Sans", 
                    fontStyle: "italic", 
                    fontSize: "3vw", 
                    minWidth: "4vw", 
                    marginTop: "-1.25vw", 
                    alignSelf: "flex-start" 
                  }}
                >
                  {work.year}
                </Typography>
                <Link 
                  href={work.url} 
                  underline="hover" 
                  sx={{ 
                    alignSelf: "flex-start", 
                    justifyContent: "flex-end"
                  }}
                >
                  <ArrowOutward className='arrowicon' sx={{ fontSize: "3vw",  minWidth: "4vw", }} />
                </Link>
              </Box>
            </Box>
          </>
        ))}
        <Coop />
      </Box>
    </>
  );
};

export default Work;