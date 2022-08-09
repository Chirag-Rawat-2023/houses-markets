import React from "react";
import { BsGithub, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
      
      <h6>All Right Reserved ❤ &copy;CODECODER--2022</h6>
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="Github">
          <Link to="/">
            <BsGithub color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Instagram">
          <Link to="/">
            <BsInstagram color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Telegram">
          <Link to="/">
            <BsTelegram color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Youtube">
          <Link to="/">
            <BsYoutube color="black" size={30} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
