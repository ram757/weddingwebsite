/*
 * HomePage
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import PictureDescriptor from '../../components/PictureDescriptor/Loadable';
import { HOME_PAGE_CONTENT } from '../../hidden/hidden';
import OliveEdgarYard from './images/olive_edgar_yard.jpg';
import './style.scss';
import {generateHash} from "./constants";

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static renderTextBody(textArray) {
    return textArray.map((textItem) => (
      <div key={`image-descriptor-${generateHash(10)}`}>{ textItem } <br /><br /></div>
    ));
  }

  renderPictureDescriptors() {
    return (
      <section className="centered">
        {
          Object.keys(HOME_PAGE_CONTENT).map((key) => {
            const {
              image,
              imageAlt,
              imagePosition,
              text
            } = HOME_PAGE_CONTENT[key];

            return (
              <PictureDescriptor
                key={`picture-descriptor-${key}`}
                image={image}
                imageAlt={imageAlt}
                imagePosition={imagePosition}
                body={(
                  <Typography variant="body1" component="div" className="picture-body">
                    {
                      HomePage.renderTextBody(text)
                    }
                  </Typography>
                )}
              />
            );
          })
        }
      </section>
    );
  }

  render() {
    return (
      <div className="home-page">
        <div className="text-title-crunch">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span></span>
          <span>U</span>
          <span>S</span>
        </div>
        {
          this.renderPictureDescriptors()
        }
        <div className="stretch-container-16">
          <img src={OliveEdgarYard} alt="Olive and Edgar in yard" />
        </div>
      </div>
    );
  }
}
