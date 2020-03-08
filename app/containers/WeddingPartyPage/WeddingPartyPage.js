/*
 * WeddingPartyPage
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import PictureDescriptor from '../../components/PictureDescriptor/Loadable';
import MobileDisclaimer from '../../components/MobileDisclaimer';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import { WEDDING_PARTY_CONTENT } from '../../hidden/weddingPartyContent';
import { generateHash } from '../../utils/helpers';
import OliveBeach from './images/olive_beach.jpg';
import './style.scss';

export default class WeddingPartyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static renderTextBody(textArray) {
    return textArray.map((textItem) => (
      <div key={`wpp-txt-${generateHash(10)}`}>{ textItem }{ typeof(textItem) === 'string' ? <React.Fragment><br /><br /></React.Fragment> : <br /> }</div>
    ));
  }

  renderPictureDescriptors() {
    let contentLength = WEDDING_PARTY_CONTENT.length;

    return (
      <section className="centered">
        <MobileDisclaimer
          text="On mobile devices, please click the underlined text to show hover-over content."
        />
        {
          WEDDING_PARTY_CONTENT.map((contentItem) => {
            const {
              image,
              imageAlt,
              imagePosition,
              imageLabel,
              imgContainerClassName,
              text
            } = contentItem;

            return (
              <React.Fragment key={`wpp-fragment-${generateHash(10)}`}>
                <PictureDescriptor
                  key={`wpp-descriptor-${generateHash(10)}`}
                  image={image}
                  imageAlt={imageAlt}
                  imagePosition={imagePosition}
                  imageLabel={imageLabel}
                  imgContainerClassName={imgContainerClassName}
                  body={(
                    <Typography variant="body1" component="div" className="picture-body">
                      {
                        WeddingPartyPage.renderTextBody(text)
                      }
                    </Typography>
                  )}
                />
                {
                  contentLength-- > 1 ? <hr style={{ width: '80%' }}/> : null
                }
              </React.Fragment>
            );
          })
        }
      </section>
    );
  }

  render() {
    return (
      <div className="wedding-party-page">
        <TitleTextCrunch text="WEDDING PARTY" />
        {
          this.renderPictureDescriptors()
        }
        <div className="stretch-container-16">
          <img src={OliveBeach} alt="Olive at the beach" />
        </div>
      </div>
    );
  }
}
