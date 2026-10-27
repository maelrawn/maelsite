import type { JSX } from "react";
import { Image } from "react-bootstrap";
import styles from "./HeadingImage.module.css";

export function HeadingImage({ src }): JSX.Element {
  return (
    <>
      <div className={styles.row}>
        <img src={src} className={styles.row} />
      </div>
    </>
  );
}
