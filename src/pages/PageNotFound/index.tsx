import React from "react";

import styles from "./styles.module.scss";

export default function PageNotFound() {
  return (
    <section className={styles.container}>
      <div id="wrapper">
        <img src="https://i.imgur.com/qIufhof.png" />
        <div id="info">
          <h3>This page could not be found</h3>
        </div>
      </div>
    </section>
  );
}
