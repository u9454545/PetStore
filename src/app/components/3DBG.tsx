import { useEffect } from 'react';

const 3DBG = () => {
  useEffect(() => {
    const handleClick = () => {
      const playButton = document.getElementById('play-button');
      if (playButton) {
        playButton.click();
      }
    };

    // Simulate button click after component has mounted
    handleClick();
  }, []);

  return (
    <div>
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Minimalism Project: 'Home'"
          
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/a864cfd583484975a907ad8482d71305/embed?preload=1"
        ></iframe>
        <p className="text-sm font-normal m-5 text-gray-700">
          <a
            href="https://sketchfab.com/3d-models/minimalism-project-home-a864cfd583484975a907ad8482d71305?utm_medium=embed&utm_campaign=share-popup&utm_content=a864cfd583484975a907ad8482d71305"
            target="_blank"
            rel="nofollow"
            className="font-bold text-blue-500"
          >
            Minimalism Project: "Home"
          </a>{' '}
          by{' '}
          <a
            href="https://sketchfab.com/lord00120?utm_medium=embed&utm_campaign=share-popup&utm_content=a864cfd583484975a907ad8482d71305"
            target="_blank"
            rel="nofollow"
            className="font-bold text-blue-500"
          >
            Jakob Baldwin
          </a>{' '}
          on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=a864cfd583484975a907ad8482d71305"
            target="_blank"
            rel="nofollow"
            className="font-bold text-blue-500"
          >
            Sketchfab
          </a>
        </p>
      </div>
  );
};

export default 3DBG;
