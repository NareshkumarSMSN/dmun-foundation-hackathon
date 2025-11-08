import React from "react";
import styles from "./Footer.module.css";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        <div className={styles.footerColumn}>
          <h3>Contact Us</h3>
          <p>4th Floor, 12 Gangnamdaero 156-gil, Seoul, Republic of Korea 06035</p>
          <p>Email: <a href="mailto:info@dnum.com">enquiries@dmun.org</a></p>
          <p>Phone: <a href="tel:+1(339)9278826">Liaison Office: +1 (339) 927 8826</a></p>
          <p>Phone: <a href="tel:+821056968302">Secretariat: +82 10 5696 8302</a></p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.footerColumn}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/dnum" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/dnum" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/dnum" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footerBottom}>
        <p>© 2025 DNUM Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
