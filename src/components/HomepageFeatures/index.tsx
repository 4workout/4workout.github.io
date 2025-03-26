import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Actions",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Let's do workout daily to keep you health stay well</>,
  },
  {
    title: "Good for eyes",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Let's do workout daily to keep you health stay well</>,
  },
  {
    title: "Good to skin",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Let's do workout daily to keep you health stay well</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <Link to="/docs">
      <div className={clsx("col col--4")}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
