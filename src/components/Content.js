import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'

import {
  Inbox as InboxIcon,
} from '@mui/icons-material'

import Nav from './Nav';
import Footer from './Footer';

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
  

  return (
    <Grid container direction={"row"} m={2} rowSpacing={5}>
      <Nav />
      {works.map((work) => (
        <>
          <Grid item xs={1} md={1}>
            <Typography sx={{ fontFamily: "Playfair Display", fontStyle: "italic", fontSize: "3vw", minWidth: "4vw", marginTop: "-1.25vw" }}>({work.id})</Typography>
          </Grid>
          <Grid item xs={8} md={8}>
            <Typography sx={{ fontFamily: "Playfair Display", fontSize: "8vw", fontWeight: "700", }}>{work.title}</Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography sx={{ fontFamily: "Playfair Display", }}>WORKS</Typography>
          </Grid>
          <Grid container direction={"column"}>
            <Divider />
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default Content;