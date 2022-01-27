import UtilSocShare from '@economist/fabric-components/utility/utilsocshare/UtilSocShare';
import {withPrefix} from 'gatsby';
import React from 'react';

import {Wrapper} from '../Wrapper';
import styles from './Hero.style';



const Hero = ({ title, btnText, logo, background, downloadFile, btnIcon }) => {

  const sponsorsList = [
    {
      sponsorLogo: logo,
      sponsorName: 'Desktop Logo',
      sponsorLink: 'https://www.economist.com/'
    },
  ];

  return (
  <div css={styles}>
    <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
      <div className="template-container">
        <div className="Hero">
          <div className="title-container">
            <UtilSocShare hasBorder={false} className="social"/>
            <h1 className="Title" dangerouslySetInnerHTML={{__html: title}} />
          </div>
          <div className="Image">
            <a href={downloadFile} className="Download-btn" download=''>
              <p dangerouslySetInnerHTML={{__html: btnText}} />
              <img src={btnIcon} alt="buttonIcon" />
            </a>
            <img src={withPrefix(background)} alt="heroImage" />
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
)};

export default Hero;
