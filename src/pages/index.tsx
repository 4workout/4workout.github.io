import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

import DocsDisplay from '../components/DocDisplay';
import FeaturesPage from '../components/HomePageFeatures/features-page';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.container}>
        <div className={styles.featuresSection}>
          <FeaturesPage />
        </div>
      </main>
      <div className={styles.docsDisplay}>
        <DocsDisplay />
      </div>
    </Layout>
  );
}
