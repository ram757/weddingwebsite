/*
 * FAQPage
 */
import React from 'react';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import EdgarCreation from './images/the_creation_of_edgar.jpg';
import { faqList } from './faqContent';
import { generateHash } from '../../utils/helpers';
import { isMobileDevice } from '../../utils/helpers';
import './style.scss';

const webStyles = {
  width: '70%',
  marginLeft: '15%',
  marginRight: '15%',
};
const mobileStyles = {
  width: '100%',
};

const renderPictureItem = (faqItem) => {
  return faqItem.picture ? (
    <p style={isMobileDevice() ? mobileStyles : webStyles}>
      <img src={faqItem.picture} />
    </p>
  ) : null;
};

const renderLinkItem = (faqItem) => {
  return faqItem.link ? (
    <p style={{ textAlign: 'center' }}>
      <a href={faqItem.link.url} target="_blank">
        {faqItem.link.text}
      </a>
    </p>
  ) : null;
};

export default function FAQPage() {
  return (
    <div className="faq-page">
      <TitleTextCrunch text="QUESTIONS" />
      <ul>
        {faqList.map((faqItem) => {
          return (
            <li key={generateHash(10)}>
              <p className="title">{faqItem.question}</p>
              <p>{faqItem.answer}</p>
              {renderPictureItem(faqItem)}
              {renderLinkItem(faqItem)}
            </li>
          );
        })}
      </ul>
      <div className="stretch-container-16">
        <img src={EdgarCreation} alt="The Creation of Edgar" />
      </div>
    </div>
  );
}
