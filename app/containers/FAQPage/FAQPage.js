/*
 * FAQPage
 */
import React from 'react';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import EdgarCreation from './images/the_creation_of_edgar.jpg';
import { faqList } from './faqContent';
import './style.scss';

export default function FAQPage() {
  return (
    <div className="faq-page">
      <TitleTextCrunch text="QUESTIONS" />
      <ul>
        {
          faqList.map(faqItem => {
            return (
              <li>
                <p className="title">{ faqItem.question }</p>
                <p>{ faqItem.answer }</p>
              </li>
            )
          })
        }
      </ul>
      <div className="stretch-container-16">
        <img src={EdgarCreation} alt="The Creation of Edgar" />
      </div>
    </div>
  );
}
