
import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
    <small>© Copyright Github</small>
    <div className="social-links">
        <Link to="https://twitter.com/ichiragtaluja" target="_blank">
          <BsTwitter />
        </Link>
        <Link to="https://github.com/ichiragtaluja" target="_blank">
          <ImGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/ichiragtaluja" target="_blank">
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};
