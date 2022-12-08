import './ProjectCards.css'
import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from '@mui/material/Grid';

const projectsList = [
  {
    id: 1,
    title: 'Bank System',
    description: 'An application to handle customer bank account requests using OOP in Java with CSV readability.',
    link: 'https://github.com/melaniemai/new_bank_acc_app'
  },
  {
    id: 2,
    title: 'Student Body',
    description: 'An application to manage student enrollments and tuition applying OOP in Java.',
    link: 'https://github.com/melaniemai/student_database_app'
  },
  {
    id: 3,
    title: 'Email Creator',
    description: 'An application to produce email accounts for new hires at a company utilizing OOP in Java.',
    link: 'https://github.com/melaniemai/email_admin_app'
  },
]

export default function ProjectCards() {
  return (
    <div className='container container-pcards'>
      <h2 className="ptitle">Projects</h2>
      <Grid 
        className='grid'
        container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 0, sm: 8, md: 12 }}
      >
        {projectsList.map((project, index) => {
          return (
            <Grid item xs={12} sm={4} md={6} key={project.id}>
              <Card className='pcard' style={{ boxShadow: "none" }}>
                <CardContent>
                  <h3 className='gray-text pcard-title'>{project.title}</h3>
                  <p className='gray-text pcard-description'>{project.description}</p>
                </CardContent>
                <CardActions>
                  <Button size="small"><a href={project.link} className='pcard-link'>CODE</a></Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
