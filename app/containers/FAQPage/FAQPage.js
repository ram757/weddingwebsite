/*
 * FAQPage
 */
import React from 'react';
import './style.scss';

export default function FAQPage() {
  return (
    <div className="faq-page">
      <h1>Wedding FAQ</h1>
      <ul>
        <li>
          <p className="title">Can Brandon McDonald wear basketball shorts?</p>
          <p>
            Fuck no.
          </p>
        </li>
        <li>
          <p className="title">Is the wedding outside?</p>
          <p>
            Yes.  The whole thing.  It&apos;s all outside.
          </p>
        </li>
      </ul>
    </div>
  );
}
