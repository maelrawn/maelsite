import type { JSX } from "react";
import type { TuonoRouteProps } from "tuono";
import type { PortfolioItem } from "../../components/PortfolioItemViewTrunc.tsx";
import { PortfolioItemViewTrunc } from "../../components/PortfolioItemViewTrunc.tsx";
import { Button, Image } from "react-bootstrap";
import { HeadingImage } from "../../components/HeadingImage.tsx";
import { SiteNavbar } from "../../components/SiteNavbar.tsx";
import styles from "../../components/PortfolioItemViewTrunc.module.css";

interface OverviewProps {
  isLoading: bool;
  data: {
    key: number;
    title: string;
    subtitle: string;
    header_image: string[];
    desc_short: string; // String literal displayed on the truncated card
    desc_long: string; // Path to markdown that gets converted to html
    tools: string[];
    hosted_at: string;
  }[];
}

export default function OverviewPage({
  isLoading,
  data,
}: TuonoRouteProps<OverviewProps>): JSX.Element {
  console.log(data);
  return (
    <>
      {/* TODO: universal website navbar */}
      <SiteNavbar />
      <HeadingImage src="https://website-res-964843501561-us-east-2-an.s3.us-east-2.amazonaws.com/professional/conversation.jpeg" />
      {/* TODO: card blurb about my professional experience */}
      <ul style={styles.ul} class="mx-0 px-0 gx-0">
        {data.items.map((item, i) => (
          <PortfolioItemViewTrunc item={item} id={i} />
        ))}
      </ul>
      {/* TODO: contact form */}
      {/* TODO: footer for portfolio page */}
    </>
  );
}
