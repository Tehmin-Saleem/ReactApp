import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
       <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="footer-links">
        <a href="#" className="footer">About us</a>
        <a href="#" className="footer">Contact Us</a>
       <a href="#" className="footer">Customer Support</a>
      </div>
    </footer>
  );
}

export default Footer;
