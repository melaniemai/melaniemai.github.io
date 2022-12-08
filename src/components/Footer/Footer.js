import "./Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="container container-footer">
      <h2 className="footer-title">Get in Touch</h2>
      <div className="footer-icons">
        <div className="footer-linkedin">
          <a href="https://www.linkedin.com/in/melaniesmai/" target="_blank" rel="noreferrer">
            <div className="linkedin-icon">
              <BsLinkedin />
            </div>
            LinkedIn
          </a>
        </div>
        <div className="footer-github">
          <a href="https://github.com/melaniemai" target="_blank" rel="noreferrer">
            <div className="github-icon">
              <BsGithub /> 
            </div>
            Github
          </a>
        </div>
        <div className="footer-email">
          <a href="mailto:melaniesmai@outlook.com">
            <div className="email-icon">
              <MdEmail /> 
            </div>
            Email
          </a>
        </div>
      </div>
      <span>inspired by cutioluis</span>
    </footer>
  )
}