/*
 * FAQPage
 */
import React from 'react';
import EdgarCreation from './images/the_creation_of_edgar.jpg';
import './style.scss';

export default function FAQPage() {
  return (
    <div className="faq-page">
      <div className="text-title-crunch">
        <span>Q</span>
        <span>U</span>
        <span>E</span>
        <span>S</span>
        <span>T</span>
        <span>I</span>
        <span>O</span>
        <span>N</span>
        <span>S</span>
      </div>
      <ul>
        <li>
          <p className="title">Is the wedding outside?</p>
          <p>
            Yes.  The whole thing.  It&apos;s all outside.  The reception area will be located under a tent.
          </p>
        </li>
        <li>
          <p className="title">What if it rains?</p>
          <p>
            All festivities will be moved under the tent.
          </p>
        </li>
        <li>
          <p className="title">What is the attire?</p>
          <p>
            Cocktail attire.
          </p>
        </li>
        <li>
          <p className="title">What is Cocktail attire?</p>
          <p>
            Suits and ties for men.  Dresses or pant suits for women.
          </p>
          <p>
            No jeans.  No shorts.  No T-shirts.  No sneakers.
          </p>
        </li>
        <li>
          <p className="title">When will the official Wedding Invitations be sent?</p>
          <p>
            Sometime before the wedding.
          </p>
        </li>
        <li>
          <p className="title">When should I RSVP by?</p>
          <p>
            Before the date listed on your Wedding Invitation (likely May 20th, 2020).
          </p>
        </li>
        <li>
          <p className="title">Can Brandon McDonald wear basketball shorts?</p>
          <p>
            Hell no.
          </p>
        </li>
      </ul>
      <div className="stretch-container-16">
        <img src={EdgarCreation} alt="The Creation of Edgar" />
      </div>
    </div>
  );
}
