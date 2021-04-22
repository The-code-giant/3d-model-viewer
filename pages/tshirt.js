import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>gladiador </title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </Head>

      <main className={styles.main}>
        <div dangerouslySetInnerHTML={{__html: `<model-viewer
          src="Hoodie.obj"
          camera-controls
          style="width: 100vw; height: 100vh"
        >
          <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
          </div>
        </model-viewer>`}} />
      </main>
    </div>
  );
}
