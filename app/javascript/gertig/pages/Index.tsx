import { Head } from "@inertiajs/react";

import styles from "@gertig/pages/Index.module.css";

export default function Index() {
  return (
    <div style={{ background: "white" }}>
      <Head title="gertig.com" />

      <div className={styles.GertigMain}>
        <aside className={styles.HeroImage}>
          {/* Hero image will be shown via CSS background-image */}
        </aside>
        <main className={styles.Main}>
          <h1 className={styles.HomeTitle}>{`Hi, I'm Andrew Gertig`}</h1>
          <div className={styles.HomeDescription}>
            <p className={styles.HomeLead}>Director of Engineering</p>
            <p className={styles.HomeBody}>
              I am a software engineer with a strong product bent and a deep
              interest in building high performing teams that build amazing
              things.
            </p>
          </div>

          <p className={styles.HomeLinks}>
            <a
              href="https://twitter.com/gertig"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/gertig/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andrewgertig/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://polymer.co" target="_blank" rel="noreferrer">
              Polymer
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
