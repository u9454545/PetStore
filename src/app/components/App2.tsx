import Head from 'next/head';
import styles from '../styles/main.module.css';

export default function App2() {
  return (
    <div>
      <Head>
        <title>Document</title>
        <link rel="stylesheet" href="/css/main.css" />
        <script src="/libs/gsap/gsap.min.js" defer></script>
        <script src="/libs/gsap/ScrollTrigger.min.js" defer></script>
        <script src="/libs/gsap/ScrollSmoother.min.js" defer></script>
        <script src="/js/app.js" defer></script>
      </Head>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={`content ${styles.content}`}>
          <header className={`main-header ${styles['main-header']}`}>
            <div className={`layers ${styles.layers}`}>
              <div className={`layer__header ${styles['layer__header']}`}>
                <div className={`layers__caption ${styles['layers__caption']}`}>
                  Welcome to our pet store
                </div>
                <div className={`layers__title ${styles['layers__title']}`}></div>
              </div>
              <div
                className={`layer layers__base ${styles['layers__base']}`}
                style={{
                  backgroundImage: "url(/img/layer-base.png)",
                }}
              ></div>
              <div
                className={`layer layers__middle ${styles['layers__middle']}`}
                style={{
                  backgroundImage: "url(/img/layer-middle.png)",
                }}
              ></div>
              <div
                className={`layer layers__front ${styles['layers__front']}`}
                style={{
                  backgroundImage: "url(/img/layer-front.png)",
                }}
              ></div>
            </div>
          </header>

          <article
            className={`main-article ${styles['main-article']}`}
            style={{
              backgroundImage: "url(/img/dungeon.jpg)",
            }}
          >
            <div className={`main-article__content ${styles['main-article__content']}`}>
              <h2 className={`main-article__header ${styles['main-article__header']}`}>
                To be continued
              </h2>
              <p className={`main-article__paragraph ${styles['main-article__paragraph']}`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident
                dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora esse id
                necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!
              </p>
            </div>
            <div className={`copy ${styles.copy}`}>© WebDesign Master</div>
          </article>
        </div>
      </div>
    </div>
  );
}
