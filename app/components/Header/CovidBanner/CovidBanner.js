import React from 'react';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Modal from '../../Modal';

const CovidBanner = () => {
  const modalActions = {
    open: null,
    close: null,
  };
  return (
    <React.Fragment>
      <div
        className="marquee-wrapper"
        style={{ backgroundColor: 'yellow' }}
        onClick={() => {
          modalActions.open();
        }}
      >
        <div
          className="marquee"
          style={{
            backgroundColor: 'yellow',
            fontSize: '32px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <NotificationImportantIcon style={{ fontSize: '32px' }} />
          <span style={{ fontSize: '32px' }}>CLICK FOR COVID-19 UPDATE</span>
          <NotificationImportantIcon style={{ fontSize: '32px' }} />
        </div>
      </div>
      <Modal
        title={'COVID-19 UPDATE'}
        text={
          'Love is infectious but so is COVID-19.  As a result, we have made the difficult decision to postpone (for the second time) our June 20th, 2021 wedding to June 12th, 2022.  ' +
          'Please contact us if you need assistance with travel arrangements.  Invitaitons to be sent in March 2022.'
        }
        onReadyObj={modalActions}
      />
    </React.Fragment>
  );
};

export default CovidBanner;
