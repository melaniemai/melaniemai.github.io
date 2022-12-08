import "./Timeline.css";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function OutlinedTimeline() {
  return (
    <div className="container container-timeline">
      <p className="purple-text">
        Travel my roadmap...
      </p>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="span" className="time">
              Jan 2020 - May 2020
            </Typography>
            <Typography>Software Engineering Co-op at Siemens</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" className="time">
                Aug 2020 - Jan 2021
              </Typography>
              <Typography>Software Engineering Co-op at Siemens</Typography>
            </TimelineContent>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" className="time">
                May 2021 - Aug 2021
              </Typography>
              <Typography>Software Developer Co-op at Blubrry Podcasting</Typography>
            </TimelineContent>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" className="time">
                Jan 2022 - Apr 2022
              </Typography>
              <Typography>Software Developer Co-op at Blubrry Podcasting</Typography>
            </TimelineContent>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" className="time">
                May 2022 - Aug 2022
              </Typography>
              <Typography>Software Engineering Co-op at TENET3</Typography>
            </TimelineContent>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};