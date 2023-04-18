import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Logo from '../assets/logo_with_text.svg';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
          <Logo className={styles.logo}/>
          <h1 className={clsx("hero__title", styles.heroTitle)}>API and Documentation</h1>
        <p className="hero__subtitle">
            Connects your application to QuattroApp, the cloud-based digital solution tailored on the needs of the small businesses.<br/>
            Here you will find the API reference and the documentation to help you navigate through our services.<br/>
            <b>Remember: Our API is currently in private beta, so you will need to send us a request to get access to it.</b>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/basics/quick-start">
            Start from here 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout>
        <HomepageHeader />
      </Layout>
  );
}
