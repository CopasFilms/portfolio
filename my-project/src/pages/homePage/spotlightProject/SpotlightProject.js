import React, { useState, useEffect, useRef } from 'react';
import './SpotlightProject.css';
import useTexts from '../../../hooks/useTexts';
import Divider from '../../../components/divider/Divider';
import videoClip from '../../../assets/video/videoSpotlightProject.mp4';
import { X } from 'lucide-react';

const SpotlightProject = () => {
  const texts = useTexts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    const html = document.documentElement;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      html.style.overflow = '';
    }
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="section-spotlightProject">
      <div className="header-spotlightProject">
        <p className="titleHeader-spotlightProject">
            {texts.TitlePage_SpotlightProject}
        </p>
        <div className="divider-spotlightProject">
          <Divider margin="0px" width="100%" gradient="linear-gradient(to right, var(--color-element-0), var(--color-element-100))" />
        </div>
      </div>
      {/* Preview do vídeo com botão play */}
      <div className="video-thumbnail" onClick={openModal}>
        <video src={videoClip} muted className="preview-video" />
        <div className="play-overlay">▶</div>
        <p className="DescriptionVideo-spotlightProject">{texts.TextVideo_SpotlightProject}</p>
      </div>
      {/* Modal com vídeo */}
      {isModalOpen && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              <X size={28} />
            </button>
            <video ref={videoRef} src={videoClip} controls autoPlay className="full-video" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotlightProject;