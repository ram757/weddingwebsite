import React from 'react';
import Typography from '@material-ui/core/Typography';
import PictureDescriptor from '../../components/PictureDescriptor/Loadable';
import MobileDisclaimer from '../../components/MobileDisclaimer';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import { HOME_PAGE_CONTENT } from '../../hidden/homePageContent';
import { generateHash } from '../../utils/helpers';
import WeddingPicsRail from '../../hidden/images/wedding_pics_rail.png';
import './style.scss';
import ThankYou from '../../components/ThankYou';

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

const HomePage = () => {
  return (
    <div className="home-page">
      <TitleTextCrunch text="WE ARE MARRIED" />
      <section>
        <ThankYou />
      </section>

      <TitleTextCrunch text="ABOUT US" />
      {renderPictureDescriptors()}
      <div className="stretch-container-16">
        <img src={WeddingPicsRail} alt="We are married now" />
      </div>
    </div>
  );
};

export default HomePage;
