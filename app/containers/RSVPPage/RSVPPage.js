/*
 * RSVP Page
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import { RSVP_CONTENT } from '../../hidden/rsvpPageContent';
import BigRockPicture from '../../hidden/images/ryan_olive_big_rock.jpg';
import './style.scss';

const RSVPPage = () => {
  return (
    <div className="rsvp-page">
      <TitleTextCrunch text="RSVP" />
      <Typography variant="h1">
        Wedding invitations were sent at the end of March of 2022. <br />
        Hopefully everyone has sent their RSVP by now :)
        {/* <br />
        <br />
        Once received, please respond via the enclosed RSVP card and send back
        by
        <br />
        <b>
          <em>
            <u>May 10th, 2022</u>
          </em>
        </b>
        . */}
      </Typography>
      <Typography variant="h3">
        {/* On the RSVP card, please include the full name of everyone in your party
        who is attending as well as the entrée choice for each person.
        <br />
        <br />
        If you or any member of your party has any dietary restrictions you
        would like us to know about please write them on the RSVP card.
        <br />
        <br /> */}
        If you have any questions or change of plans please contact us by phone
        or text at{' '}
        <b>
          <em>{RSVP_CONTENT.phoneNumber}</em>
        </b>
        .{' '}
      </Typography>
      <div className="stretch-container-16">
        <img src={BigRockPicture} alt="Ryan and Olive on a big rock" />
      </div>
    </div>
  );
};

export default RSVPPage;
