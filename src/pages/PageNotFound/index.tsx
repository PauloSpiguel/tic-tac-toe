import React from "react";

import styles from "./styles.module.scss";

export default function PageNotFound() {
  return (
    <section className={styles.container}>
      <img src="https://i.imgur.com/qIufhof.png" alt="Not Found" />
      <div>
        <h3>This page could not be found</h3>
        <a href="/">To Back Home</a>
      </div>
    </section>
  );
}
