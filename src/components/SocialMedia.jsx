import React from "react";
import { BsLinkedin, BsYoutube, BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/bhopusinha" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/bhupendra-sinha-151109239/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/bhupendra_sinha_002/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
