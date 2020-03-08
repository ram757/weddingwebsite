import React from 'react';
import PhippsParkingMap from './images/parking_map_phipps.jpg';

export const faqList = [
    {
        question: 'Where is the wedding?',
        answer: 
            <span>
                <em>Phipps Conservatory and Botanical Gardens</em>.  To open a map of the conservatory,&nbsp;
                <a href='https://www.phipps.conservatory.org/assets/documents/mapnew.pdf' target='_blank'>click here</a>.
            </span>
    },
    {
        question: 'Is the wedding outside?',
        answer: 'Yes.  Everything will be outside.  The reception area will be located under a tent.'
    },
    {
        question: 'What if it rains?',
        answer: 'All festivities will be moved under the tent.'
    },
    {
        question: 'What is the attire?',
        answer: 'Cocktail attire.'
    },
    {
        question: 'What is Cocktail attire?',
        answer: 'Suits and ties for men.  Dresses or pant suits for women.  No jeans.  No shorts.  No T-shirts.  No sneakers.  No Viking hats.'
    },
    {
        question: 'When will the official Wedding Invitations be sent?',
        answer: 'Expect your invitation by April 2020.'
    },
    {
        question: 'When should I RSVP by?',
        answer: 'Please send your RSVP card back by May 10th, 2020. Earlier responses are welcome!'
    },
    {
        question: 'Can I bring a guest?',
        answer: 'If your invitation says "GUEST" on it, then you may bring a guest.  If you would really like to bring a guest that was not invited, please speak with us.'
    },
    {
        question: 'Can I bring my kid(s)?',
        answer: 'If your children are on the invitation then you may bring them. There will not be any childcare services. You will be entirely responsible for their supervision to ensure they do not stick their hands in the wedding cake before it is cut. If you need any special accomodations like a high chair let us know!'
    },
    {
        question: 'Can Phipps catering accommodate my gluten-free, vegan, lactose inolerant, "I only eat sea salt" restrictions?',
        answer: 'Please write any dietary restrictions on your RSVP card.  Children\'s meals are available by request for guests under 12 years old.'
    },
    {
        question: 'Can I bring my dog?',
        answer: 'No.  Phipps does not allow dogs in the gardens.'
    },
    {
        question: 'Where should I park at the venue?',
        answer: 
            <span>
                There is parking available in front of Phipps on Schenley Drive as well as parking along sidewalks of neighboring streets.&nbsp;
                <em><u>If you plan to drive, please appropriate enough time to find parking as the parking area in front of Phipps may fill up.</u></em>&nbsp;
                See the picture below outlining nearby parking locations and where the wedding entrance is located.
            </span>,
        picture: PhippsParkingMap,
        link: {
            text: 'Click for more information!',
            url: 'https://www.phipps.conservatory.org/visit-and-explore/visit/directions-and-parking'
        }
    },
]