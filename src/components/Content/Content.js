import {
  Box,
  Divider,
  Container,
  Grid,
  Typography,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Paper,
  useTheme,
} from '@mui/material'
import {
  ArrowOutward,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles';


import './Content.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

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
                letterSpacing: "-.025em", 
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
                <ArrowOutward className='arrowicon' sx={{ fontSize: "4vw",  minWidth: "4vw", }} />
              </Link>
            </Box>
          </Box>
        </>
      ))}
    </Box>
  );
};

export default Content;