/*
 * HomePage
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
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
import PictureDescriptor from '../../components/PictureDescriptor/Loadable';
import MobileDisclaimer from '../../components/MobileDisclaimer';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import {
  HOME_PAGE_CONTENT,
  HOME_PAGE_TIMELINE,
} from '../../hidden/homePageContent';
import { generateHash } from '../../utils/helpers';
import OliveEdgarYard from './images/olive_edgar_yard.jpg';
import './style.scss';

const renderTextBody = (textArray) => {
  return textArray.map((textItem) => (
    <div key={`hp-txt-${generateHash(10)}`}>
      {textItem}
      {typeof textItem === 'string' ? (
        <React.Fragment>
          <br />
          <br />
        </React.Fragment>
      ) : (
        <br />
      )}
    </div>
  ));
};

const renderPictureDescriptors = () => {
  return (
    <section className="centered">
      <MobileDisclaimer text="On mobile devices, please click the underlined text to show hover-over content." />
      {Object.keys(HOME_PAGE_CONTENT).map((key) => {
        const { image, imageAlt, imagePosition, text } = HOME_PAGE_CONTENT[key];

        return (
          <PictureDescriptor
            key={`hpp-descriptor-${key}`}
            image={image}
            imageAlt={imageAlt}
            imagePosition={imagePosition}
            body={
              <Typography
                variant="body1"
                component="div"
                className="picture-body"
              >
                {renderTextBody(text)}
              </Typography>
            }
          />
        );
      })}
    </section>
  );
};

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

const HomePage = () => {
  return (
    <div className="home-page">
      <TitleTextCrunch text="WEDDING WEEKEND" />
      <section>{renderTimeLineCard()}</section>

      <TitleTextCrunch text="ABOUT US" />
      {renderPictureDescriptors()}
      <div className="stretch-container-16">
        <img src={OliveEdgarYard} alt="Olive and Edgar in yard" />
      </div>
    </div>
  );
};

export default HomePage;
