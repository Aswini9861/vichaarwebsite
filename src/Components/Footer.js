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
        {/* <div class="footer-abt mt70 pt40 pb40">
			<div class="container">
			  <div class="row">
				<div class="col-lg-3 vcenter">
				  <div class="footer-ree-lg">
					<div class="footer-logo">
					  <a href="/"> <img src="images/vichaarlab.png" alt="reeven" class="img"> </a>
					</div>
					<div class="star-rating-review mt30">
					  <span class="fa fa-star checked"></span>
					  <span class="fa fa-star checked"></span>
					  <span class="fa fa-star checked"></span>
					  <span class="fa fa-star checked"></span>
					  <span class="fa fa-star checked"></span>
					</div>
					<h6 class="mt10">Overall client rating is 4.9 out of 8,500 Clients for Reevan</h6>
				  </div>
				</div>
				<div class="col-lg-6 vcenter">
				  <div class="ref-logo">
					<a href="#"> <img src="images/app-futura.png" alt="Logo"> </a>
					<a href="#"> <img src="images/clutch.png" alt="Logo"> </a>
					<a href="#"> <img src="images/goodfirm.png" alt="Logo"> </a>
					<a href="#"> <img src="images/itfirm.png" alt="Logo"> </a>
				  </div><section class="main-eigth">
	  <div class="container">
		  <div class="row">
			  <div class="row head-sec">
				  <h3><span>Choose Your </span> Maintenance Plan</h3>
			  </div>
		  </div>
  
		  <div class="row">
			  <div class="col-md-4 col-sm-4 col-12">
				  <div class="prce-bsx">
					  <h5>Basic</h5>
					  <h6>$150 <small>/month</small></h6>
					  <p class="p-sites"><span>2 Websites</span></p>
					  <ul class="prc-fet-one">
						  <li>Cloudflare CDN Implementation</li>
						  <li>Implement Conversion Friendly Change (As Requested)</li>
						  <li>Implementing Third-Party Scripts</li>
						  <li>GZip Caching Implementation</li>
						  <li>Scan and Remove Malware</li>
						  <li>Firewall Setup and Virus Protection</li>
						  <li>Theme update for a fresh experience</li>
						  <li>Consistent Plugin Update</li>
						  <li>Regular WordPress Core Update</li>
						  <li>Best Caching Implementation Suiting your WordPress Setup.</li>
					  </ul>
					  <ul class="prc-fet-two">
						  <li>Optimize images and reduce the size by up to 90%</li>
						  <li>Advanced Speed Optimization Strategy</li>
						  <li>Diagnose and Fix Errors as they appear</li>
						  <li>Constant Monitoring for Database Errors</li>
						  <li>Debug Chronic Issues</li>
						  <li>Google Analytics Integration</li>
						  <li>Sitemap submit to Search Console</li>
						  <li>WordPress Vulnerability Protection</li>
						  <li>Daily/Weekly/Monthly Backup</li>
						  <li>24x7 Uptime Monitoring and Action</li>
					  </ul>
					  <p class="p-signup"><a href="https://www.beeplugin.com/checkout/?add-to-cart=16853">Buy Now</a></p>
				  </div>
			  </div>
  
			  <div class="col-md-4 col-sm-4 col-12">
				  <div class="prce-bsx">
					  <h5>Standard</h5>
					  <h6>$250 <small>/month</small></h6>
					  <p class="p-sites"><span>5 Websites</span></p>
					  <ul class="prc-fet-one">
						  <li>Cloudflare CDN Implementation</li>
						  <li>Implement Conversion Friendly Change (As Requested)</li>
						  <li>Implementing Third-Party Scripts</li>
						  <li>GZip Caching Implementation</li>
						  <li>Scan and Remove Malware</li>
						  <li>Firewall Setup and Virus Protection</li>
						  <li>Theme update for a fresh experience</li>
						  <li>Consistent Plugin Update</li>
						  <li>Regular WordPress Core Update</li>
						  <li>Best Caching Implementation Suiting your WordPress Setup.</li>
					  </ul>
					  <ul class="prc-fet-two">
						  <li>Optimize images and reduce the size by up to 90%</li>
						  <li>Advanced Speed Optimization Strategy</li>
						  <li>Diagnose and Fix Errors as they appear</li>
						  <li>Constant Monitoring for Database Errors</li>
						  <li>Debug Chronic Issues</li>
						  <li>Google Analytics Integration</li>
						  <li>Sitemap submit to Search Console</li>
						  <li>WordPress Vulnerability Protection</li>
						  <li>Daily/Weekly/Monthly Backup</li>
						  <li>24x7 Uptime Monitoring and Action</li>
					  </ul>
					  <p class="p-signup"><a href="https://www.beeplugin.com/checkout/?add-to-cart=16855">Buy Now</a></p>
				  </div>
			  </div>
  
			  <div class="col-md-4 col-sm-4 col-12">
				  <div class="prce-bsx">
					  <h5>Custom</h5>
					  <h6><span>Contact Sales</span></h6>
					  <p class="cstm-desc">Ideal for enterprises or marketing and digital agencies managing a significant portfolio of websites, this plan provides a bespoke solution crafted to precisely address your unique requirements.</p>
					  <ul class="prc-fet-two">
						  <li>Bruteforce Attacker Protection</li>
						  <li>Automated Security Scan</li>
						  <li>Firewall Setup and Virus Protection</li>
						  <li>Clean up logs, database cleaning</li>
						  <li>Spam and Phishing Prevention</li>
					  </ul>
					  <p class="p-signup"><a href="/contact-us/">Let's Discuss</a></p>
				  </div>
			  </div>
  
		  </div>
	  </div>
  </section>
				</div>
				<div class="col-lg-3 vcenter ft-btn">
				  <a href="#" class="ree-btn  ree-btn-grdt1 mw-80 no-shadows">Our Brochure <i class="fas fa-arrow-right fa-btn"></i></a>
				</div>
			  </div>
			</div>
		  </div> */}
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
    {/* end footer */}
    </div>
    </>
  )
}

export default Footer
