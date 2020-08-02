/*
 * RSVP Page
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import { RSVP_CONTENT } from '../../hidden/rsvpPageContent';
import BigRockPicture from '../../hidden/images/ryan_olive_big_rock.jpg';
import './style.scss';

export default function RSVPPage() {
  return (
    <div className="rsvp-page">
      <TitleTextCrunch text="RSVP" />
      <Typography variant="h1">
        Expect wedding invitations to be sent in March of 2021. <br />
        {/* Please send back your RSVP card by <b><em><u>May 10th, 2021</u></em></b>. */}
      </Typography>
      <Typography variant="h2">
        Please contact us by phone or text at{' '}
        <b>
          <em>{RSVP_CONTENT.phoneNumber}</em>
        </b>{' '}
        if you have any questions or any change of plans.
      </Typography>
      <div className="stretch-container-16">
        <img src={BigRockPicture} alt="Ryan and Olive on a big rock" />
      </div>
    </div>
  );
}
