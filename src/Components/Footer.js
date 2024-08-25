import React from 'react'
const Footer = () => {
  return (
    <>
    <div>
      <footer className="footer-a">
      <div className="footer-fist-row pt40">
        <div className="container">
          <div className="footer-rowset">
            <div className="col footer-head">
              <div className="footer-logo">
                <a href="/"> <img src="images/vichaarlab.png" alt="reeven" className="img" /> </a>
                <p>Where innovation meets excellence. <br />Empowering businesses with cutting-edge<br /> solutions to thrive in the digital age</p>
              </div>
            </div>
            <div className="col footer-head">
              <h5>Quick Links</h5>
              <ul className="footer-links-list social-linkz">
                <li><a href="About"> About</a>	</li>
                <li><a href="javascript:void(0)"> Services </a>	</li>
                <li><a href="javascript:void(0)"> Industry</a> </li>
                <li><a href="Contact"> Contact Us</a></li>

              </ul>
            </div>
            <div className="col footer-head">
              <h5>Contact info</h5>
              <ul className="footer-links-list social-linkz">
                <li><a href="tel:+91 9090972227"><span><i className="fas fa-phone-square-alt" /></span> +91 9090972227 </a></li>
                <li><a href="https://wa.me/7978542166"><span><i className="fab fa-whatsapp-square" /></span> +91 9090972227</a></li>
                <li><a href="mailto:info@vichaarlab.com"><span><i className="fas fa-envelope" /></span> info@vichaarlab.com</a></li>
				<li><a href="mailto:info@vichaarlab.com"><span><i className="fas fa-home"/></span> Plot no. 288/3842, Nandan Vihar, Patia, Bhubaneswar, Odisha-751024</a></li>
              </ul>
            </div>
            <div className="col footer-head">
              <h5>Social Media</h5>
              <ul className="topbar-social">
                <li><a href="https://www.facebook.com/profile.php?id=61557903014355" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com/vichaarlab" target="_blank"><i className="fab fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/company/vichaarlab" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="https://www.instagram.com/vichaarlab/" target="_blank"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container ft-cpy">
          <div className="row">
            <div className="col-lg-12">
              <div className="ft-copyright ft-r">
                <p>Copyright © 2024 Vichaar Lab. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </>
  )
}

export default Footer
