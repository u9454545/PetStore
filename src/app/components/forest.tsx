// pages/index.tsx

import React from 'react';
import Head from 'next/head';

export default function forest(){
  return (
    <div className="wrapper">
      <Head>
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css" rel="stylesheet" />
        <script src="../components/libs/gsap/gsap.min.js" defer></script>
        <script src="../components/libs/gsap/ScrollTrigger.min.js" defer></script>
        <script src="../components/libs/gsap/ScrollSmoother.min.js" defer></script>
        <script src="js/app.js" defer></script>
      </Head>
      <div className="content">
        <header className="main-header">
          <div className="layers">
            <div className="layer__header">
              <div className="layers__caption">Welcome to our pet store</div>
              <div className="layers__title"></div>
            </div>
            <div className="layer layers__base" style={{ backgroundImage: 'url(../components/img/layer-base.png)' }}></div>
            <div className="layer layers__middle" style={{ backgroundImage: 'url(../components/img/layer-middle.png)' }}></div>
            <div className="layer layers__front" style={{ backgroundImage: 'url(../components/img/layer-front.png)' }}></div>
          </div>
        </header>
        <article className="main-article" style={{ backgroundImage: 'url(../components/img/dungeon.jpg)' }}>
          <div className="main-article__content">
            <h2 className="main-article__header">To be continued</h2>
            <p className="main-article__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!</p>
          </div>
          <div className="copy">© WebDesign Master</div>
        </article>
      </div>
    </div>
  );
};


