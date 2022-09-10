import React from 'react';
import Typography from '@material-ui/core/Typography';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { HOME_PAGE_TIMELINE } from '../../hidden/homePageContent';
import BigRockPicture from '../../hidden/images/ryan_olive_big_rock.jpg';
import './style.scss';

import './style.scss';

const renderTimeLineItem = ({ time, event }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent className={'time--override'}>
        <Typography color="textSecondary">{time}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={'event--override'}>
        <Typography component={'div'}>{event}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const renderTimeLineCard = () => {
  return (
    <Card className="center-card">
      <CardHeader
        disableTypography
        style={{
          paddingBottom: '0px',
          textAlign: 'center',
          fontSize: '2em',
        }}
        title={'Wedding Weekend Information'}
      />
      <CardContent style={{ textAlign: 'center' }}>
        <Typography variant="body1" component="div">
          <section className="no-margins">
            <h3>Free Phipps Visit</h3>
            <section>{HOME_PAGE_TIMELINE.phippsVisit}</section>
          </section>
          <Timeline>
            <h3>Sunday, June 12th - Wedding Day!</h3>
            {renderTimeLineItem(HOME_PAGE_TIMELINE.shuttleBefore[0])}
            {renderTimeLineItem(HOME_PAGE_TIMELINE.shuttleBefore[1])}
            {renderTimeLineItem(HOME_PAGE_TIMELINE.wedding)}
            {renderTimeLineItem(HOME_PAGE_TIMELINE.shuttleAfter[0])}
            {renderTimeLineItem(HOME_PAGE_TIMELINE.shuttleAfter[1])}
            {renderTimeLineItem(HOME_PAGE_TIMELINE.afterParty)}
            <h3>Monday, June 13th - Morning After!</h3>
            {renderTimeLineItem(HOME_PAGE_TIMELINE.breakfast)}
            {renderTimeLineItem({
              time: '12:00PM',
              event: 'Safe travels home everyone!',
            })}
          </Timeline>
          <section className="no-margins">
            <h3>Parking Reminder</h3>
            {HOME_PAGE_TIMELINE.visitDisclaimer.event}
          </section>
        </Typography>
      </CardContent>
    </Card>
  );
};

const RSVPPage = () => {
  return (
    <div className="rsvp-page">
      <TitleTextCrunch text="WEDDING WEEKEND" />
      <section>{renderTimeLineCard()}</section>

      <div className="stretch-container-16">
        <img src={BigRockPicture} alt="Ryan and Olive on a big rock" />
      </div>
    </div>
  );
};

export default RSVPPage;
