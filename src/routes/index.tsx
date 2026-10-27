// src/routes/index.tsx
import type { JSX } from "react";
import { Button } from "react-bootstrap";
import type { TuonoRouteProps } from "tuono";
import { ButtonOverlaidImage } from "../components/ButtonOverlaidImage.tsx";

export default function IndexPage({
  data,
}: TuonoRouteProps<IndexProps>): JSX.Element | null {
  // if (!data?.results) return null;
  // conversation image: https://website-res-964843501561-us-east-2-an.s3.us-east-2.amazonaws.com/professional/conversation.jpeg
  // milo image: https://website-res-964843501561-us-east-2-an.s3.us-east-2.amazonaws.com/professional/milo.jpeg
  // headlamp image: https://website-res-964843501561-us-east-2-an.s3.us-east-2.amazonaws.com/personal/headlamp.jpeg
  // hat image: https://website-res-964843501561-us-east-2-an.s3.us-east-2.amazonaws.com/personal/hat.jpeg
  // milo_zoom image: https://website-res-964843501561-us-east-2-an.s3.us-east-2.amazonaws.com/professional/milo_zoom.jpeg
  return (
    <>
      <title>maelrawn dot dev</title>
      <div class="container position-absolute top-50 start-50 translate-middle">
        <div class="row gx-5 gy-3">
          <div class="row g-0 my-0">
            <div class="col-4" />
            <div class="col-4 text-center">
              <h1 class="text-success my-0">maelrawn.dev</h1>
            </div>
            <div class="col-4" />
          </div>
          <div class="col">
            <ButtonOverlaidImage
              props={{
                img: "https://website-res-964843501561-us-east-2-an.s3.us-east-2.amazonaws.com/personal/hat.jpeg",
                href: "https://www.google.com",
                text: "Personal",
                alt: "Laughing while using a phone as a headlamp, secured by two headbands.",
              }}
            />
          </div>
          <div class="col">
            <ButtonOverlaidImage
              props={{
                img: "https://website-res-964843501561-us-east-2-an.s3.us-east-2.amazonaws.com/professional/milo.jpeg",
                href: "/professional/overview",
                text: "Professional",
                alt: "Man holding dog in office.",
              }}
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4" />
          <div class="col-4 text-center">
            <h6 class="fixed-bottom text-nowrap opacity-50">
              Written with Rust and React. Not affiliated with Valve.
            </h6>
            <div class="col-4" />
          </div>
        </div>
      </div>
    </>
  );
}
