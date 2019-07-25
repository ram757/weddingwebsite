/*
 * HomePage
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import PictureDescriptor from '../../components/PictureDescriptor/Loadable';
import { HOME_PAGE_CONTENT } from '../../hidden/hidden';
import OliveEdgarYard from './images/olive_edgar_yard.jpg';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderImageDescriptors2() {
    return (
      <section>
        {
          Object.keys(HOME_PAGE_CONTENT).map((key) => {
            const [
              image,
              imageAlt,
              imagePosition,
              text
            ] = HOME_PAGE_CONTENT[key];

            return (
              <PictureDescriptor
                key={`picture-descriptor-${key}`}
                image={image}
                imageAlt={imageAlt}
                imagePosition={imagePosition}
                body={(
                  <Typography variant="body1" component="div" className="picture-body">
                    {
                      text.map((textItem, index) => {
                        return (
                          <div key={`image-descriptor-${index * 23}`}>{ textItem } <br /><br /></div>
                        );
                      })
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

  renderImageDescriptors() {
    const {
      ITEM_1,
      ITEM_2,
      ITEM_3,
      ITEM_4,
      ITEM_5,
      ITEM_6,
      ITEM_7,
      ITEM_8
    } = HOME_PAGE_CONTENT;
    return (
      <div>
        <PictureDescriptor
          image={ITEM_1.image}
          imageAlt={ITEM_1.imageAlt}
          imagePosition={ITEM_1.imagePosition}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                ITEM_1.text.map((text, index) => {
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
          image={ITEM_2.image}
          imageAlt={ITEM_2.imageAlt}
          imagePosition={ITEM_2.imagePosition}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                ITEM_2.text.map((text, index) => {
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
          image={ITEM_3.image}
          imageAlt={ITEM_3.imageAlt}
          imagePosition={ITEM_3.imagePosition}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                ITEM_3.text.map((text, index) => {
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
          image={ITEM_4.image}
          imageAlt={ITEM_4.imageAlt}
          imagePosition={ITEM_4.imagePosition}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                ITEM_4.text.map((text, index) => {
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
          image={ITEM_5.image}
          imageAlt={ITEM_5.imageAlt}
          imagePosition={ITEM_5.imagePosition}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                ITEM_5.text.map((text, index) => {
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
          image={ITEM_6.image}
          imageAlt={ITEM_6.imageAlt}
          imagePosition={ITEM_6.imagePosition}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                ITEM_6.text.map((text, index) => {
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
          image={ITEM_7.image}
          imageAlt={ITEM_7.imageAlt}
          imagePosition={ITEM_7.imagePosition}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                ITEM_7.text.map((text, index) => {
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
          image={ITEM_8.image}
          imageAlt={ITEM_8.imageAlt}
          imagePosition={ITEM_8.imagePosition}
          body={(
            <Typography variant="body1" component="div" className="picture-body">
              {
                ITEM_8.text.map((text, index) => {
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
