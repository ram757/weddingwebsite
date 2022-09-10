import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import RyBqOlive from '../../hidden/images/rm_bq_olive_married.jpg';
import './style.scss';

const ThankYou = ({ linkContent }) => {
  return (
    <Card className="thank-you-card">
      <CardHeader
        disableTypography
        style={{
          paddingBottom: '0px',
          textAlign: 'center',
          fontSize: '2em',
        }}
        title={'Thank You Everyone!'}
      />
      <CardContent style={{ textAlign: 'center' }}>
        <Typography variant="body1" component="div">
          <section className="no-margins">
            Ryan & Brigitte would like to thank everyone who made the journey to
            witness and celebrate their marriage in Pittsburgh. All of the love
            and support you all have shown them made the memories that much more
            special. They cannot wait for more adventures together as husband
            and wife and are excited to have you all along for the ride :)
          </section>
          <section>{linkContent || null}</section>
          <br />
          <section>
            <img
              src={RyBqOlive}
              alt="Ryan, Brigitte, Olive doing married people things"
            />
          </section>
          <h3>Thank You!</h3>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ThankYou;
