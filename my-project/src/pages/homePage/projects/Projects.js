import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import Divider from '../../../components/divider/Divider';
import useTexts from '../../../hooks/useTexts';
import { X } from 'lucide-react';

import clipe01 from '../../../assets/video/projects/edit01.mp4';
import clipe02 from '../../../assets/video/projects/edit02.mp4';
import clipe03 from '../../../assets/video/projects/edit03.mp4';
import clipe04 from '../../../assets/video/projects/edit04.mp4';
import clipe05 from '../../../assets/video/projects/edit05.mp4';
import clipe06 from '../../../assets/video/projects/edit06.mp4';

const Projects = () => {
  const texts = useTexts();
  const [showAll, setShowAll] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);
  const [isVertical, setIsVertical] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const videoRef = useRef(null);

  const videoData = [
    { src: clipe01, title: texts.TitleVideoClip_Edit_Projects },
    { src: clipe02, title: texts.TitleVideoClip_Tiktok_Projects },
    { src: clipe03, title: texts.TitleVideoClip_Tiktok_Projects },
    { src: clipe04, title: texts.TitleVideoClip_Cinematic_Projects },
    { src: clipe05, title: texts.TitleVideoClip_Edit_Projects },
    { src: clipe06, title: texts.TitleVideoClip_Podcast_Projects },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (video) => {
    const tempVideo = document.createElement('video');
    tempVideo.src = video;

    tempVideo.onloadedmetadata = () => {
      const { videoWidth, videoHeight } = tempVideo;
      setIsVertical(videoHeight > videoWidth);
      setModalVideo(video);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    };
  };

  const closeModal = () => {
    setModalVideo(null);
    setIsVertical(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const firstVideos = isMobile ? videoData.slice(0, 3) : videoData.slice(0, 4);
  const extraVideos = videoData.slice(firstVideos.length);

  return (
    <section id="projects">
      <div className="section-projects">
        <div className="header-projects">
          <p className="titleHeader-projects">{texts.TitlePage_Projects}</p>
          <div className="divider-projects">
            <Divider
              margin={'0px'}
              width={'100%'}
              gradient="linear-gradient(to right, var(--color-element-0), var(--color-element-100))"
            />
          </div>
        </div>

        <div className="video-grid-header">
          <div className="view-all-button-container">
            <button className="view-all-button" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Ocultar' : 'Visualizar Todos'}
            </button>
          </div>

          <div className="video-grid">
            {firstVideos.map((video, index) => (
              <div key={index} className="video-card" onClick={() => openModal(video.src)}>
                <video src={video.src} muted className="video-preview" />
                <div className="play-overlay">▶</div>
                <p className="video-title">{video.title}</p>
              </div>
            ))}
          </div>

          {showAll && (
            <div className="video-grid extra-videos">
              {extraVideos.map((video, index) => (
                <div key={index} className="video-card" onClick={() => openModal(video.src)}>
                  <video src={video.src} muted className="video-preview" />
                  <div className="play-overlay">▶</div>
                  <p className="video-title">{video.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {modalVideo && (
          <div className="video-modal">
            <div className={`modal-content ${isVertical ? 'modal-vertical' : 'modal-horizontal'}`}>
              <button className="close-button" onClick={closeModal}>
                <X size={24} />
              </button>
              <video ref={videoRef} src={modalVideo} controls autoPlay className="full-video" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;