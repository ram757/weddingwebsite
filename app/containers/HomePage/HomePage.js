/*
 * HomePage
 */

import React from 'react';
import PictureDescriptor from '../../components/PictureDescriptor';
import { HOME_PAGE_TEXT } from "../../hidden";
import OliveEdgarYard from './images/olive_edgar_yard2.jpg';
import Image1 from './images/1.jpg';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderImageDescriptors() {
    return (
      <PictureDescriptor
        image={Image1}
        imageAlt={null}
        imagePosition="left"
        body={(
          <div>
            {
              HOME_PAGE_TEXT.TEXT_1.map((text, index) => {
                return (
                  <span key={`image-descriptor-${index * 23}`}>{ text } <br /></span>
                );
              })
            }
          </div>
        )}
      />
    );
  }

  render() {
    return (
      <div className="home-page">
        <section className="centered">
          <h2>Ryan and Brigitte</h2>
          <p>
            ARE GETTING MARRIED
          </p>
        </section>
        <section className="centered">
          {
            this.renderImageDescriptors()
          }
        </section>
        <div className="stretch-container-16">
          <img src={OliveEdgarYard} alt="Olive and Edgar in yard" />
        </div>
      </div>
    );
  }
}
