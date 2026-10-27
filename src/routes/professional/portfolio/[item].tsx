import type { JSX } from "react";
import type { TuonoRouteProps } from "tuono";
import { Link } from "tuono";

import PortfolioItemView from "../../components/PortfolioItemView";

interface PortfolioItem {
  title: string;
  subtitle: string;
  header_image: string[];
  desc_short: string; // String literal displayed on the truncated card
  desc_long: string; // Path to markdown that gets converted to html
  tools: string[];
  hosted_at: string;
}

export default function PortfolioItemViewPage({
  isLoading,
  data,
}: TuonoRouteProps<PortfolioItem>): JSX.Element {
  return (
    <div>
      <Link href="/">Back</Link>

      {isLoading && (
        <>
          <title>Pokemon: loading...</title>
          <div>Loading...</div>
        </>
      )}

      {data?.id && (
        <>
          <title>{`Pokemon: ${data.name}`}</title>
          <PokemonView pokemon={data} />
        </>
      )}
    </div>
  );
}
