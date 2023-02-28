import {
  Box,
  Divider,
  Typography,
  Link,
  useTheme,
  Toolbar,
} from '@mui/material'
import {
  ArrowOutward,
} from '@mui/icons-material'
import Nav from '../Nav';

import './Content.css';

const PAGE_WORK = 0
const PAGE_ABOUT = 1
const PAGE_CONTACT = 2

const Coop = () => {
  const theme = useTheme();
  const coops = [
    {
      id: 1,
      title: "Software Eng. Intern",
      company: "TENET3",
      location: "Dayton, OH",
      date: "May - Aug '22",
      url: "https://www.tenet3.com/",
    },
    {
      id: 2,
      title: "Software Dev. Co-op",
      company: "Blubrry Podcasting",
      location: "Columbus, OH",
      date: "Jan - Apr '22",
      url: "https://www.blubrry.com/",
    },
    {
      id: 3,
      title: "Software Dev. Co-op",
      company: "Blubrry Podcasting",
      location: "Columbus, OH",
      date: "May - Aug '21",
      url: "https://www.blubrry.com/",
    },
    {
      id: 4,
      title: "Software Eng. Co-op",
      company: "Siemens",
      location: "Milford, OH",
      date: "Aug '20 - Jan '21",
      url: "https://www.siemens.com/us/en/home.html",
    },
    {
      id: 5,
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
        Places I've Interned At
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

const Content = () => {
  const works = [
    {
      id: 1,
      title: "DigBizCard",
      description: "A small and simple digital business card.",
      year: "2023",
      url: "https://github.com/melaniemai/digbizcard",
    },
    {
      id: 2,
      title: "StuDB",
      description: "Student database application managing student enrollments and balances.",
      year: "2021",
      url: "https://github.com/melaniemai/student_database_app",
    },
    {
      id: 3,
      title: "New Bank",
      description: "A bank account application that handles new customer bank account requests.",
      year: "2021",
      url: "https://github.com/melaniemai/new_bank_acc_app",
    },
    {
      id: 4,
      title: "Email Admin",
      description: "Email administration application creates email accounts for new hires at a company.",
      year: "2020",
      url: "https://github.com/melaniemai/email_admin_app",
    },
  ]
  
  const theme = useTheme()

  return (
    <>
      <Nav />
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

export default Content;