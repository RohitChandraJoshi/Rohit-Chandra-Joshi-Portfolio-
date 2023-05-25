import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://instagram.com/realrohit_2020?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100016208709819"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/rohitchandrajoshi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
