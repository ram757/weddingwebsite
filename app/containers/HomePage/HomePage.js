/*
 * HomePage
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import PictureDescriptor from '../../components/PictureDescriptor/Loadable';
import { POSITION } from '../../components/PictureDescriptor/constants';
import { HOME_PAGE_TEXT } from '../../hidden';
import OliveEdgarYard from './images/olive_edgar_yard.jpg';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';
import Image4 from './images/4.jpg';
import Image5 from './images/5.jpg';
import Image6 from './images/6.jpg';
import Image7 from './images/7.jpg';
import Image8 from './images/8.jpg';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderImageDescriptors() {
    return (
      <div>
        <PictureDescriptor
          image={Image1}
          imageAlt={null}
          imagePosition={POSITION.LEFT}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                HOME_PAGE_TEXT.TEXT_1.map((text, index) => {
                  return (
                    <div key={`image-descriptor-${index * 23}`}>{ text } <br /><br /></div>
                  );
                })
              }
            </Typography>
          )}
        />
        <br />
        <PictureDescriptor
          image={Image2}
          imageAlt={null}
          imagePosition={POSITION.RIGHT}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                HOME_PAGE_TEXT.TEXT_2.map((text, index) => {
                  return (
                    <div key={`image-descriptor-${index * 23}`}>{ text } <br /><br /></div>
                  );
                })
              }
            </Typography>
          )}
        />
        <br />
        <PictureDescriptor
          image={Image3}
          imageAlt={null}
          imagePosition={POSITION.LEFT}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                HOME_PAGE_TEXT.TEXT_2.map((text, index) => {
                  return (
                    <div key={`image-descriptor-${index * 23}`}>{ text } <br /><br /></div>
                  );
                })
              }
            </Typography>
          )}
        />
        <br />
        <PictureDescriptor
          image={Image4}
          imageAlt={null}
          imagePosition={POSITION.RIGHT}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                HOME_PAGE_TEXT.TEXT_4.map((text, index) => {
                  return (
                    <div key={`image-descriptor-${index * 23}`}>{ text } <br /><br /></div>
                  );
                })
              }
            </Typography>
          )}
        />
        <br />
        <PictureDescriptor
          image={Image5}
          imageAlt={null}
          imagePosition={POSITION.LEFT}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                HOME_PAGE_TEXT.TEXT_5.map((text, index) => {
                  return (
                    <div key={`image-descriptor-${index * 23}`}>{ text } <br /><br /></div>
                  );
                })
              }
            </Typography>
          )}
        />
        <br />
        <PictureDescriptor
          image={Image6}
          imageAlt={null}
          imagePosition={POSITION.RIGHT}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                HOME_PAGE_TEXT.TEXT_6.map((text, index) => {
                  return (
                    <div key={`image-descriptor-${index * 23}`}>{ text } <br /><br /></div>
                  );
                })
              }
            </Typography>
          )}
        />
        <br />
        <PictureDescriptor
          image={Image7}
          imageAlt={null}
          imagePosition={POSITION.LEFT}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                HOME_PAGE_TEXT.TEXT_7.map((text, index) => {
                  return (
                    <div key={`image-descriptor-${index * 23}`}>{ text } <br /><br /></div>
                  );
                })
              }
            </Typography>
          )}
        />
        <br />
        <PictureDescriptor
          image={Image8}
          imageAlt={null}
          imagePosition={POSITION.RIGHT}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                HOME_PAGE_TEXT.TEXT_8.map((text, index) => {
                  return (
                    <div key={`image-descriptor-${index * 23}`}>{ text } <br /><br /></div>
                  );
                })
              }
            </Typography>
          )}
        />
        <br />
      </div>
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
