import type { JSX } from "react";
import styles from "./PortfolioItemViewTrunc.module.css";
interface PortfolioItem {
  key: number;
  title: string;
  subtitle: string;
  header_image: array<string>;
  desc_short: string; // String literal displayed on the truncated card
  desc_long: string; // Path to markdown that gets converted to html
  tools: array<string>;
  hosted_at: string;
}

export function PortfolioItemViewTrunc({ item }: PortfolioItem): JSX.Element {
  return (
    <>
      <li>
        {/* TODO: make cards look better */}
        <div class="card">
          <img class="card-img-top" src={item.header_image[0]} />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.desc_short}</p>
            <h5 class="card-subtitle">Tools used:</h5>
            <p class="card-text">
              {item.tools.map(
                (tool, i) => `${tool}${i + 1 != item.tools.length ? ", " : ""}`,
              )}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}
