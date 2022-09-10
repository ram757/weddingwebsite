import React from 'react';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import WeddingPicsRail from '../../hidden/images/wedding_pics_rail.png';
import './style.scss';
import ThankYou from '../../components/ThankYou';
import { SPECIAL_LINK } from '../../hidden/hidden';

const driveLinkContent = () => {
  return (
    <h2>
      <a href={SPECIAL_LINK} rel="noopener noreferer" target="_blank">
        View Ryan & Brigitte's Wedding Photos
      </a>
    </h2>
  );
};

const PhotoPage = () => {
  return (
    <div className="photo-page">
      <TitleTextCrunch text="PHOTOS" />
      <ThankYou linkContent={driveLinkContent()} />
      <div className="stretch-container-16">
        <img src={WeddingPicsRail} alt="Married life" />
      </div>
    </div>
  );
};

export default PhotoPage;
