import type { JSX } from "react";

interface ButtonOverlaidImageProps {
  img: string;
  text: string;
  href: string;
  alt: string;
}

export function ButtonOverlaidImage({
  props,
}: ButtonOverlaidImageProps): JSX.Element {
  return (
    <>
      <div class="card bg-dark border-success border-opacity-25 shadow-lg">
        <img src={props.img} class="card-img img-sm" alt={props.alt} />
        <div class="card-img-overlay">
          <a
            type="button"
            role="button"
            class="btn btn-lg btn-outline-primary bg-dark bg-opacity-75 position-absolute top-50 start-50 translate-middle-x"
            href={props.href}
          >
            {props.text}
          </a>
        </div>
      </div>
    </>
  );
}
