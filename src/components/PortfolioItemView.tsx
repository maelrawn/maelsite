// src/components/itemView.tsx
import type { JSX } from "react";

import styles from "./PortfolioItemView.module.css";

interface PortfolioItem {
  title: string;
  subtitle: string;
  header_image: array<string>;
  desc_short: string; // String literal displayed on the truncated card
  desc_long: string; // Path to markdown that gets converted to html
  tools: array<string>;
  hosted_at: string;
}

interface PortfolioItemViewProps {
  item: PortfolioItem;
}

export default function PortfolioItemView({
  item,
}: PortfolioItemViewProps): JSX.Element {
  return (
    <div className={styles.item}>
      <div>
        <h1 className={styles.title}>{item.title}</h1>
        <dl className={styles.spec}>
          <dt className={styles.label}>Weight: </dt>
          <dd>{item.weight}lbs</dd>
        </dl>
        <dl className={styles.spec}>
          <dt className={styles.label}>Height: </dt>
          <dd>{item.desc_short}</dd>
        </dl>
      </div>
      <img src={item.header_image[0]} alt="" />
    </div>
  );
}
