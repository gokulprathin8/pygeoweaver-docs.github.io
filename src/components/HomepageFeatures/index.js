import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Effortless Geospatial Workflow Orchestration',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Pygeoweaver empowers you to easily create and manage complex geospatial workflows,
          automating the processing and analysis of your geospatial data.
      </>
    ),
  },
  {
    title: 'Python-Powered Geoprocessing',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          With Pygeoweaver, you can leverage the power of Python for geospatial data processing,
          integrating popular libraries and tools to streamline your workflows.
      </>
    ),
  },
  {
    title: 'Flexible and Scalable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Whether you are working with small datasets or big geospatial data, Pygeoweaver offers
          scalability and flexibility to handle your geoprocessing tasks efficiently by connecting to multiple hosts.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
