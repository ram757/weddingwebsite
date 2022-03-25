import React from 'react';

//https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date();
const secondDate = new Date(2022, 6, 12);
const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

//TODO: Decide if I want to add a "days-until" count down...
