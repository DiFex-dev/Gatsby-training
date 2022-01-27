import React from 'react';

import {hero} from '../../../content/home';
import {Hero} from '../../components/Hero';
import { Layout } from '../../components/Layout';

const HomePageTemplate = ({ pageContext: { PageData } }) => (
    <Layout PageData={PageData}>
      <Hero title={hero.title} btnText={hero.btnText} logo={hero.sponsorLogo} background={PageData.hero.backgroundImage} downloadFile={hero.downloadFile} btnIcon={PageData.hero.buttonIcon}/>
    </Layout>
  )

export default HomePageTemplate;
