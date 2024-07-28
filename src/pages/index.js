import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import  { Redirect } from 'react-router-dom'

import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react'
function HomepageHeader() {
  React.useEffect(() => {
    window.location.href = useBaseUrl('/docs/main');
  }, []);
  return null;
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Redirect to='/getting_started'  />
  );
}