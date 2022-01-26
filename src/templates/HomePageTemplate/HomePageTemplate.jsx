import { withPrefix } from 'gatsby';
import React from 'react';
import HeadAdvImpact from '@economist/fabric-components/header/headadvimpact/HeadAdvImpact';
import HeadImpact from '@economist/fabric-components/header/headimpact/HeadImpact';
import UtilSocShare from '@economist/fabric-components/utility/utilsocshare/UtilSocShare';
import FootEconSec from '@economist/fabric-components/footer/footeconsec/FootEconSec';
import { Layout } from '../../components/Layout';
import { Wrapper } from '../../components/Wrapper';
import styles from './HomePageTemplate.styles';


const HomePageTemplate = ({ pageContext: { PageData } }) => {
  const {hero,} = PageData;
  const sponsorsList = [
    {
      sponsorLogo: hero.sponsorLogo,
      sponsorName: 'Desktop Logo',
      sponsorLink: 'https://www.economist.com/'
    },
  ];



  return (
    <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
      <div css={styles}>
        <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
          <div className="template-container">
            <div className="Hero">
              <div className="title-container">
                <UtilSocShare hasBorder={false} className="social"/>
                <p className="Title">Gold Demand Trends:<br/>Q2 2021 </p>
              </div>
              <div className="Image">
                <a href='#' className="Download-btn">
                  Download report
                  <img src={PageData.hero.buttonIcon} alt="buttonIcon" />
                </a>
                <img src={withPrefix(PageData.hero.backgroundImage)} alt="heroImage" />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
}

export default HomePageTemplate;
