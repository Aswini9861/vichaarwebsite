import React from 'react'
// import Header from './Header'
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <>
        {/* <Header/> */}
       <div>
  {/*about company*/}
  <section className="r-bg-c sec-pad about-uss">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="page-headings side-pghd">
            <img src="images/about-us.png" alt="About Us" title="About Us" />
          </div>
        </div>
        <div className="col-lg-8">
          <span className="sub-heading mb15">About Vichaar Lab?</span>
          <h4 className="mb15">We go the the root of tech and bring the better solutions for you</h4>
          <p>VichaarLab is at the forefront of technological advancement, dedicated to delivering superior solutions. With a commitment to innovation, we harness the latest advancements in technology to provide cutting-edge products and services tailored to meet your needs. From software development to hardware solutions, VichaarLab is your trusted partner in shaping the future of technology.</p>
          <Link to="/Contact" className="ree-btn ree-btn-grdt1 mt40 mw-80 aos-init aos-animate" data-aos="fade-in" data-aos-delay={800}>Contact Us <i className="fas fa-arrow-right fa-btn" /></Link>
          {/* <div class="row justify-content-center">
						<div class="col-lg-12">
							<div class="company-stats2 roww mt30">
								<div class="statsnum counter-number mt30">	<p>Complete Projects</p>	<span class="counter">7500</span> <span>+</span> </div>
								<div class="statsnum counter-number mt30"> <p>Happy Clients</p>	<span class="counter">3500</span> <span>+</span>	</div>
								<div class="statsnum counter-number mt30">	<p>Expert Team</p>	<span class="counter">540</span><span>+</span>		</div>
								<div class="statsnum counter-number mt30">	<p>Success Years</p> <span class="counter">20</span><span>+</span>	</div>
							</div>
						</div>
					</div>	 */}
        </div>
      </div>
    </div>
  </section>
  {/*about company end*/}
  {/*start services*/}
  <section className="r-bg-i sec-pad">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="sec-heading text-center pera-block">
            <h5>Complete Web Development Services</h5>
            <h2>Create Unique Web Solutions</h2>
            <p>The challenges involved with every project that we relish solving, crafting solutions that drive revolutions in your business growth. We’ve a team of top performers and handle challenging projects single handed, each with valuable experience from their previous employment. Many of them have been consistently recognized. And our Work approach are:</p>
          </div>
        </div>
      </div>
      <div className="row mt30">
        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="ree-card r-bg-c mt60">
            <div className="ree-card-img shadows"><img src="images/mobile-app.svg" alt="services" /> </div>
            <div className="ree-card-content mt40">
              <h3 className="mb15"><Link to="javascript:void(0);"> Human-Centric Solutions</Link></h3>
              <p>We tackle complex and high-stakes challenges with a focus on understanding. Our journey begins with thorough problem discovery, ensuring a comprehensive grasp of every facet of the issue before diving into solutions.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="ree-card r-bg-c  mt60">
            <div className="ree-card-img"><img src="images/website.svg" alt="services" /> </div>
            <div className="ree-card-content mt40">
              <h3 className="mb15"><Link to="javascript:void(0);">Precision-Driven Approach</Link></h3>
              <p>We eliminate uncertainty to provide clarity, efficiency, optimal resource utilization, and enhanced business results.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={500}>
          <div className="ree-card r-bg-c  mt60">
            <div className="ree-card-img"><img src="images/buy-online.svg" alt="services" /> </div>
            <div className="ree-card-content mt40">
              <h3 className="mb15"><Link to="javascript:void(0);">Synergistic Solutions</Link></h3>
              <p>Embracing a partnership-oriented ethos, we create outcomes as robust as the collaborations that shape them. Together, we address your most formidable challenges, delivering tangible value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*services end*/}
  <section>
    <div className="new-cta-ses-container"> <span className="new-cta-ses-overlay" />
      <div className="new-cta-ses-cover container">
        <div className="new-cta-ses-line-heading">
          <div className="new-cta-ses-line-heading-left">
            <h2>Say hello to us</h2>
            <h4><Link to="Contact">Talk with Us</Link></h4>
          </div>
          <p>We mitigate risk in complex, high-value technology projects.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="page-heading-sec serv-page-head r-bg-a pt85 pb120">
    <div className="container">
      <div className="service-stats">
        <div className="row mt30 justify-content-center">
          <div className="col-lg-4 col-md-6 mt30" data-aos="fade-im" data-aos-delay={800}>
            <div className="ree-row-set round-bdr">
              <div className="ree-icon-set ree-stat-icn">
                <img src="images/cellphone.svg" alt="web" className="w-100" />
              </div>
              <div className="ree-details-set">
                <div className="countrr"><span>750</span> <span>+</span> </div>
                <p>Mobile Apps Developed</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt30" data-aos="fade-im" data-aos-delay={1000}>
            <div className="ree-row-set round-bdr">
              <div className="ree-icon-set ree-stat-icn">
                <img src="images/world-wide-web.svg" alt="web" className="w-100" />
              </div>
              <div className="ree-details-set">
                <div className="countrr"><span>3500</span> <span>+</span> </div>
                <p>Web site Developed</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt30" data-aos="fade-im" data-aos-delay={1200}>
            <div className="ree-row-set round-bdr">
              <div className="ree-icon-set ree-stat-icn">
                <img src="images/cart-click.svg" alt="web" className="w-100" />
              </div>
              <div className="ree-details-set">
                <div className="countrr"><span>200</span> <span>+</span> </div>
                <p>eCommerce Store Develop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*start home review*/}
  <section className="sec-pad reebgd">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 vcenter">
          <div className="quote-text">
            <h2>Hear directly from our satisfied clients about their experiences and successes with our services.</h2>
          </div>
        </div>
        <div className="col-lg-6 vcenter">
          <div className="ree-card mt30 trust-review owl-carousel">
            <div className="items">
              <div className="review-text">
                <p>VichaarLab has been an absolute game-changer for our business. The’ve innovative solutions and personalized approaches that truly transformed the way we operate. From enhancing our digital presence to optimizing our processes, VichaarLab's expertise has been invaluable. Highly recommend their services to any business looking to stay ahead in today's competitive landscape.</p>
              </div>
              <div className="ree-row-set mt30">
                <div className="media vcenter">
                  <div className="ree-icon-set img-round80"><img src="images/hj.png" alt="img" className="img-fluid" /></div>
                  <div className="ree-details-set user-info">
                    <h5>Hariom Jewellers</h5>
                    <p>Jewelry store in Berhampur, Odisha</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="review-text">
                <p>Working with VichaarLab was a breath of fresh air! The development team not only understood our vision but also went above and beyond to exceed our expectations. The level of professionalism and dedication they displayed throughout the project was remarkable. </p>
              </div>
              <div className="ree-row-set mt30">
                <div className="media vcenter">
                  <div className="ree-icon-set img-round80"><img src="images/craft.png" alt="img" className="img-fluid" /></div>
                  <div className="ree-details-set user-info">
                    <h5>KRAFT CREATIVE PRINT</h5>
                    <p>Digital printing service in Bhubaneswar, Odisha</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="review-text">
                <p>VichaarLab is simply phenomenal! Their innovative solutions have revolutionized our business operations and propelled us towards success. The best thing about the company is that, they've more patience to understand their clients.</p>
              </div>
              <div className="ree-row-set mt30">
                <div className="media vcenter">
                  <div className="ree-icon-set img-round80"><img src="images/sx.png" alt="img" className="img-fluid" /></div>
                  <div className="ree-details-set user-info">
                    <h5>Shine x Club &amp; Lounge</h5>
                    <p>Club in Bhubaneswar, Odisha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end home review */}
  {/*mission and vision*/}
  <section className="r-bg-a sec-pad vision-sec">
  <div className="container">
    <div className="row miss-ss">
      <h2>Our Inspiration</h2>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        {/* Tabs nav */}
        <ul
          className="vrt-tabb nav nav-pills nav-pills-custom"
          id="pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <li>
            <a
              className="nav-link active"
              id="mission-tab"
              data-toggle="pill"
              href="#pills-mission"
              role="tab"
              aria-controls="pills-mission"
              aria-selected="true"
            >
              <i className="fas fa-rocket" /> Our Core Principles
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              id="vision-tab"
              data-toggle="pill"
              href="#pills-vision"
              role="tab"
              aria-controls="pills-vision"
              aria-selected="false"
            >
              <i className="far fa-eye" /> Drive for Success
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              id="value-tab"
              data-toggle="pill"
              href="#pills-value"
              role="tab"
              aria-controls="pills-value"
              aria-selected="false"
            >
              <i className="fas fa-hands-helping" /> Nurturing Our Talent
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              id="future-tab"
              data-toggle="pill"
              href="#pills-future"
              role="tab"
              aria-controls="pills-future"
              aria-selected="false"
            >
              <i className="fas fa-hands-helping" /> Future-Focused Orientation
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              id="problem-tab"
              data-toggle="pill"
              href="#pills-problem"
              role="tab"
              aria-controls="pills-problem"
              aria-selected="false"
            >
              <i className="fas fa-hands-helping" /> Problem Solving with Precision
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              id="trust-tab"
              data-toggle="pill"
              href="#pills-trust"
              role="tab"
              aria-controls="pills-trust"
              aria-selected="false"
            >
              <i className="fas fa-hands-helping" /> Cultivating Trustworthy Relationships
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-8 col-sm-12">
        {/* Tabs content */}
        <div className="tab-content tab-bg" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-mission"
            role="tabpanel"
            aria-labelledby="mission-tab"
          >
            <h3 className="mb15">Our Core Principles</h3>
            <p>
              At the heart of our mission lie our inspiration and core principles. We are driven by a deep sense of purpose and guided by unwavering values that shape every decision and action we take. With a commitment to integrity, innovation, and excellence, we strive to make a meaningful impact in everything we do, inspiring positive change and driving sustainable growth.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="pills-vision"
            role="tabpanel"
            aria-labelledby="vision-tab"
          >
            <h3 className="mb15">Drive for Success</h3>
            <p>
              We are committed to achieving positive outcomes for both our clients and our team members, persisting until victory is achieved.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="pills-value"
            role="tabpanel"
            aria-labelledby="value-tab"
          >
            <h3 className="mb15">Nurturing Our Talent</h3>
            <p>
              We foster growth and enhance capabilities by purposefully investing in our people, processes, and community.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="pills-future"
            role="tabpanel"
            aria-labelledby="future-tab"
          >
            <h3 className="mb15">Future-Focused Orientation</h3>
            <p>
              We envision our goals and steer decisively toward them, making tough choices and laying foundations for tomorrow.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="pills-problem"
            role="tabpanel"
            aria-labelledby="problem-tab"
          >
            <h3 className="mb15">Problem Solving with Precision</h3>
            <p>
              We prioritize understanding our clients' needs and identifying key challenges. With expertise, determination, and adaptability, we tackle complex, high-value problems head-on.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="pills-trust"
            role="tabpanel"
            aria-labelledby="trust-tab"
          >
            <h3 className="mb15">Cultivating Trustworthy Relationships</h3>
            <p>
              We cultivate relationships built on trust, characterized by honesty, transparency, and meaningful collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>

    </>
  )
}

export default AboutUs