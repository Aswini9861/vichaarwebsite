import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  return (
    <>
      <section className="home-hero slide-hero">
        <OwlCarousel
          className="hero-owl"
          items={1}
          loop
          autoplay
          autoplayTimeout={3000}
          autoplayHoverPause
          dots
        >
          <div
            className="slide owlbg11"
            data-background="images/svg/svg-bg1.svg"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 vcenter">
                  <div className="hero-content-x">
                    <p className="mb10 ree-tt">IoT Development Company</p>
                    <h1
                      className="mb30"
                      data-aos="fade-in"
                      data-aos-delay={200}
                    >
                      <span className="ree-tt">We Provide</span> High-Quality
                      IOT Development Solutions
                    </h1>
                    <p data-aos="fade-in" data-aos-delay={500}>
                      With precision and innovation, we specialize in crafting
                      powerful IoT solutions that drive 10* your business value
                    </p>
                    <Link
                      to="/Contact"
                      className="ree-btn ree-btn-grdt1 mt40 mw-80"
                      data-aos="fade-in"
                      data-aos-delay={800}
                    >
                      Let's Talk <i className="fas fa-arrow-right fa-btn" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 vcenter">
                  <div className="sol-image m-mt30">
                    <img
                      src="images/web-design.svg"
                      alt="web development"
                      className="img-fluid"
                      data-aos="fade-in"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide owlbg11"
            data-background="images/svg/svg-bg2.svg"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 vcenter">
                  <div className="hero-content-x">
                    <p className="mb10 ree-tt">Web Development Company</p>
                    <h1
                      className="mb30"
                      data-aos="fade-in"
                      data-aos-delay={200}
                    >
                      <span className="ree-tt">We Deliver</span> Innovative Web
                      development Solutions
                    </h1>
                    <p data-aos="fade-in" data-aos-delay={500}>
                      We use the latest software technologies to craft
                      innovative apps, empowering our clients to achieve
                      sustainable growth in today's competitive market
                    </p>
                    <a
                      href="Contact"
                      className="ree-btn ree-btn-grdt1 mt40 mw-80"
                      data-aos="fade-in"
                      data-aos-delay={800}
                    >
                      Let's Talk <i className="fas fa-arrow-right fa-btn" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 vcenter">
                  <div className="sol-image m-mt30">
                    <img
                      src="images/marketing.svg"
                      alt="web development"
                      className="img-fluid"
                      data-aos="fade-in"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide owlbg11"
            data-background="images/svg/svg-bg3.svg"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 vcenter">
                  <div className="hero-content-x">
                    <p className="mb10 ree-tt">Product Development Company</p>
                    <h1
                      className="mb30"
                      data-aos="fade-in"
                      data-aos-delay={200}
                    >
                      <span className="ree-tt">Turning Ideas</span> Into Reality
                      for Product Development
                    </h1>
                    <p data-aos="fade-in" data-aos-delay={500}>
                      We specialize in bringing concepts to life through
                      innovative solutions. From the beginning, we're committed
                      to turning your ideas into successful products that boom
                      in the market
                    </p>
                    <Link
                      to="/Contact"
                      className="ree-btn ree-btn-grdt1 mt40 mw-80"
                      data-aos="fade-in"
                      data-aos-delay={800}
                    >
                      Let's Talk <i className="fas fa-arrow-right fa-btn" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 vcenter">
                  <div className="sol-image m-mt30">
                    <img
                      src="images/ecommerce.svg"
                      alt="web development"
                      className="img-fluid"
                      data-aos="fade-in"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide owlbg11" data-background="images/svg/svg-bg4.svg">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-sm-12 vcenter">
                  <div class="hero-content-x">
                    <p class="mb10 ree-tt">Lorem Ipsum is simply dummy.</p>
                    <h1 class="mb30" data-aos="fade-in" data-aos-delay="200">
                      <span class="ree-tt">Lorem Ipsum</span> is simply dummy.
                    </h1>
                    <p data-aos="fade-in" data-aos-delay="500">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    <Link
                      to="/Contact"
                      class="ree-btn  ree-btn-grdt1 mt40 mw-80"
                      data-aos="fade-in"
                      data-aos-delay="800"
                    >
                      Let's Talk <i class="fas fa-arrow-right fa-btn"></i>
                    </Link>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 vcenter">
                  <div class="sol-image m-mt30">
                    <img
                      src="images/ai.svg"
                      alt="web development"
                      class="img-fluid"
                      data-aos="fade-in"
                      data-aos-delay="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
      {/*hero Section End*/}

      {/* Start home About */}
      <section className="home-about sec-pad r-bg-a we-are-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-home m-mb60 pera-block">
                <h2>Why Hire VichaarLab</h2>
                <p>
                  We're a Web and SaaS product development company with a highly
                  experience in implementing complex projects for clients over
                  the globe. Our software developer teams have experience in
                  successfully implementing more web applications. We develop
                  scalable web &amp; desktop applications, beautiful websites
                  that focus on the user experience, custom online portals, and
                  e-commerce solutions.
                </p>
                <p>
                  We served industries, Real-estate, Construction, Ecommerce,
                  Manufacturing from more than 15+ countries to create a
                  compelling online presence and efficiently reach their digital
                  goals.
                </p>
                <div className="company-budges mt60 mb60">
                  <div className="img-budges">
                    <img
                      src="images/badge-a.png"
                      alt="Awards badges"
                      className="img-fluid"
                    />
                  </div>
                  <div className="img-budges">
                    <img
                      src="images/badge-b.png"
                      alt="Awards badges"
                      className="img-fluid"
                    />
                  </div>
                  <div className="img-budges">
                    <img
                      src="images/badge-c.png"
                      alt="Awards badges"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="btn-sets">
                  <a href="About" className="ree-btn ree-btn-grdt2 mr20">
                    About Us <i className="fas fa-arrow-right fa-btn" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="company-stats">
                <div className="row">
                  <div className="col-lg-6 col-6 m-pr7">
                    <div
                      className="stats-box stat-bx-1"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <span className="sub-heading mb20">BEST QUALITY</span>
                      {/* <h3>7500<span>+</span></h3> */}
                      <p className="mt20">
                        Optimal quality-to-cost ratio with complete transparency
                        guaranteed
                      </p>
                    </div>
                    <div
                      className="stats-box stat-bx-2 mt20"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <span className="sub-heading mb20">FLEXIBLE TEAMS</span>
                      {/* <h3>540<span>+</span></h3> */}
                      <p className="mt20">
                        Versatile expertise tailored to your needs, always
                        delivering on time
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6 m-pl7">
                    <div
                      className="stats-box stat-bx-3 mt100"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <span className="sub-heading mb20">
                        SKILLED PERSONNEL
                      </span>
                      {/* <h3>3500<span>+</span></h3> */}
                      <p className="mt20">
                        Tap into our pool of top-tier developers, primed to
                        deliver bespoke solutions
                      </p>
                    </div>
                    <div
                      className="stats-box stat-bx-4 mt20"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <span className="sub-heading mb20">ALWAYS ON TIME</span>
                      {/* <h3>20<span>+</span></h3> */}
                      <p className="mt20">
                        Count on precision scheduling and comprehensive reports,
                        ensuring punctual project completion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*home-about end*/}

      <div>
        {/*start home-about  */}
        {/* <section class="home-about sec-pad r-bg-a">
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="about-content-home m-mb60 pera-block text-center">
        <h2>We Work With <span class="ree-tt">Great Companies</span> of All Sizes</h2>
        <p>Reevan started its operation in the year 1999. We are Worldwide, based Web, App	and Digital Marketing Company. Our main Domain is Web Design, App Development, Digital
          Marketing, Product Design and Cloud Services. Customer Satisfaction and the Highest rate of	Customer Repeatability make us one of the pioneers in the field. So, what are you waiting
          for? Let us discuss your ideas and our innovation in detail because catering your requirement and converting it into a final product is our main goal.
        </p>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-lg-10 mt60">
      <div class="client-logo-set">
        <a href="#"><img src="images/uilogos-1.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-2.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-3.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-4.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-5.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-6.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-7.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-8.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-9.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-10.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-11.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-12.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-13.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-14.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-15.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-16.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-17.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-18.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-19.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-20.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-21.png" alt="client logo"></a>
        <a href="#"><img src="images/uilogos-22.png" alt="client logo"></a>
      </div>
    </div>
  </div>
</div>
    </section> */}
        {/*home-about end*/}
        {/*start services*/}
        {/* <section class="r-bg-i sec-pad digi-service">
<div class="container">
<div class="row justify-content-center">
  <div class="col-lg-8">
    <div class="sec-heading text-center pera-block">
      <h2>See What We Can <span class="ree-tt">Do</span> for <span class="ree-tt">You</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
    </div>
  </div>
</div>
<div class="row mt30">
  <div class="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="100">
    <div class="ree-card bhv-tt">
      <div class="creative-img reebga"><img src="images/webdesign.svg" alt="App Development" class="img-fluid"></div>
      <div class="creative-cntnt">
        <h4 class="mb15"><a href="#"> Web Development</a></h4>
        <p>We don't just build websites, we build websites that SELLS</p>
        <a href="services.html" class="ree-card-link mt30">Read More <i class="fas fa-arrow-right fa-btn"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="400">
    <div class="ree-card bhv-tt">
      <div class="creative-img reebgb"><img src="images/appdesign.svg" alt="App Development" class="img-fluid"></div>
      <div class="creative-cntnt">
        <h4 class="mb15"><a href="service-details.html"> UI/UX Design</a></h4>
        <p>We don't just build websites, we build websites that SELLS</p>
        <a href="services.html" class="ree-card-link mt30">Read More <i class="fas fa-arrow-right fa-btn"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="700">
    <div class="ree-card bhv-tt">
      <div class="creative-img reebgc"><img src="images/content.svg" alt="App Development" class="img-fluid"></div>
      <div class="creative-cntnt">
        <h4 class="mb15"><a href="service-details.html">Content Marketing</a></h4>
        <p>We don't just build websites, we build websites that SELLS</p>
        <a href="services.html" class="ree-card-link mt30">Read More <i class="fas fa-arrow-right fa-btn"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="1000">
    <div class="ree-card bhv-tt">
      <div class="creative-img reebgd"><img src="images/strategy.svg" alt="App Development" class="img-fluid"></div>
      <div class="creative-cntnt">
        <h4 class="mb15"><a href="service-details.html"> Digital Marketing</a></h4>
        <p>We don't just build websites, we build websites that SELLS</p>
        <a href="services.html" class="ree-card-link mt30">Read More <i class="fas fa-arrow-right fa-btn"></i></a>
      </div>
    </div>
  </div>
</div>
</div>
    </section> */}
        {/*services end*/}
        {/*start services*/}
        <section className="r-bg-i sec-pad">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="sec-heading text-center pera-block">
                  <h2>Services We Provided</h2>
                  <p>
                    We not only developed the application, we’re a solutions
                    provider and aim to grow your business with the solutions we
                    developed
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt60">
              <div className="col-lg-12">
                <div className="ree-ca-service owl-carousel">
                  <div className="itm">
                    <div className="ree-card reebga">
                      <div className="creative-cntnt">
                        <h4 className="mb15">
                          <a href="javascript:void();">
                            {" "}
                            Business Development Company
                          </a>
                        </h4>
                        <p>
                          Crafting innovative solutions from concept to launch,
                          revolutionizing the market with every product
                        </p>
                      </div>
                      <div className="creative-img mt30">
                        <img
                          src="images/prototype.svg"
                          alt="App Development"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="itm">
                    <div className="ree-card reebgb">
                      <div className="creative-cntnt">
                        <h4 className="mb15">
                          <a href="web-app-services.html">
                            {" "}
                            Web Development Company
                          </a>
                        </h4>
                        <p>
                          Transforming ideas into dynamic online experiences,
                          driving digital success for businesses worldwide
                        </p>
                      </div>
                      <div className="creative-img mt30">
                        <img
                          src="images/appdevelop.svg"
                          alt="App Development"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="itm">
                    <div className="ree-card reebgc">
                      <div className="creative-cntnt">
                        <h4 className="mb15">
                          <a href="javascript:void();">
                            {" "}
                            IoT Development Company
                          </a>
                        </h4>
                        <p>
                          Pioneering the future of connectivity, delivering
                          cutting-edge solutions that shape industries
                        </p>
                      </div>
                      <div className="creative-img mt30">
                        <img
                          src="images/graphic.svg"
                          alt="App Development"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="itm">
                    <div className="ree-card reebgd">
                      <div className="creative-cntnt">
                        <h4 className="mb15">
                          <a href="#"> Product Maintenance</a>
                        </h4>
                        <p>
                          Ensuring seamless functionality and longevity,
                          providing dedicated support for ongoing product
                          optimization
                        </p>
                      </div>
                      <div className="creative-img mt30">
                        <img
                          src="images/stracture.svg"
                          alt="App Development"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="cta-block-wide mt100">
    <div class="row justify-content-center text-center">
      <div class="col-lg-10 vcenter">
        <div class="cta-heading-wide-bt">
          <h3>Hire World-Class <span class="ree-text rt40">Developers</span></h3>
          <a href="get-quote.html" class="ree-btn  ree-btn-grdt1 mw-80">Hire Now <i class="fas fa-arrow-right fa-btn"></i></a>
        </div>
      </div>

    </div>
  </div> */}
          </div>
        </section>
        {/*services end*/}
        {/*start home review*/}
        <section className="sec-pad reebgd">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 vcenter">
                <div className="quote-text">
                  <h2>
                    Hear directly from our satisfied clients about their
                    experiences and successes with our services.
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 vcenter">
                <div className="ree-card mt30 trust-review owl-carousel">
                  <div className="items">
                    <div className="review-text">
                      <p>
                        VichaarLab has been an absolute game-changer for our
                        business. The’ve innovative solutions and personalized
                        approaches that truly transformed the way we operate.
                        From enhancing our digital presence to optimizing our
                        processes, VichaarLab's expertise has been invaluable.
                        Highly recommend their services to any business looking
                        to stay ahead in today's competitive landscape.
                      </p>
                    </div>
                    <div className="ree-row-set mt30">
                      <div className="media vcenter">
                        <div className="ree-icon-set img-round80">
                          <img
                            src="images/hj.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="ree-details-set user-info">
                          <h5>Hariom Jewellers</h5>
                          <p>Jewelry store in Berhampur, Odisha</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="review-text">
                      <p>
                        Working with VichaarLab was a breath of fresh air! The
                        development team not only understood our vision but also
                        went above and beyond to exceed our expectations. The
                        level of professionalism and dedication they displayed
                        throughout the project was remarkable.{" "}
                      </p>
                    </div>
                    <div className="ree-row-set mt30">
                      <div className="media vcenter">
                        <div className="ree-icon-set img-round80">
                          <img
                            src="images/craft.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="ree-details-set user-info">
                          <h5>KRAFT CREATIVE PRINT</h5>
                          <p>Digital printing service in Bhubaneswar, Odisha</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="review-text">
                      <p>
                        VichaarLab is simply phenomenal! Their innovative
                        solutions have revolutionized our business operations
                        and propelled us towards success. The best thing about
                        the company is that, they've more patience to understand
                        their clients.
                      </p>
                    </div>
                    <div className="ree-row-set mt30">
                      <div className="media vcenter">
                        <div className="ree-icon-set img-round80">
                          <img
                            src="images/sx.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
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
        {/*start work*/}
        <section className="r-bg-a sec-pad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-8 vcenter">
                <div className="heading-hz-btn">
                  <h2>
                    Our <span className="ree-tt">Industries </span> of Expertise
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 col-sm-4 vcenter">
                <div className="link-sol-header">
                  <a href="portfolio.html" className="ree-card-link">
                    View All <i className="fas fa-arrow-right fa-btn" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt60">
              <div className="col-lg-12">
                <div className="full-work-block  owl-carousel">
                  <div className="fwb-main-x fwb-a">
                    <div className="work-thumbnails">
                      <a href="#">
                        <img
                          src="images/portfolio-1.jpg"
                          alt="portfolio"
                          className="img-fluid"
                        />{" "}
                      </a>
                    </div>
                    <div className="work-details">
                      <p className="mb10">Real-Estate</p>
                      <h4>
                        <a href="#">
                          {" "}
                          Our Real Estate development experts engineer scalable,
                          secure solutions that captivate...
                        </a>{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="fwb-main-x fwb-a">
                    <div className="work-thumbnails">
                      <a href="#">
                        {" "}
                        <img
                          src="images/portfolio-2.jpg"
                          alt="portfolio"
                          className="img-fluid"
                        />{" "}
                      </a>
                    </div>
                    <div className="work-details">
                      <p className="mb10">Ecommerce</p>
                      <h4>
                        <a href="#">
                          Our team specializes in crafting scalable and secure
                          e-commerce solutions, drawing in new...
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="fwb-main-x fwb-a">
                    <div className="work-thumbnails">
                      <a href="#">
                        {" "}
                        <img
                          src="images/portfolio-3.jpg"
                          alt="portfolio"
                          className="img-fluid"
                        />{" "}
                      </a>
                    </div>
                    <div className="work-details">
                      <p className="mb10">Manufacturing</p>
                      <h4>
                        <a href="#">
                          {" "}
                          Our team engineers robust, scalable solutions that
                          optimize operations and streamline...
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="fwb-main-x fwb-a">
                    <div className="work-thumbnails">
                      <a href="#">
                        {" "}
                        <img
                          src="images/portfolio-2.jpg"
                          alt="portfolio"
                          className="img-fluid"
                        />{" "}
                      </a>
                    </div>
                    <div className="work-details">
                      <p className="mb10">Construction</p>
                      <h4>
                        <a href="#">
                          {" "}
                          We design tailored solutions that enhance project
                          management and collaboration...
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end work*/}
        {/*start technologies*/}
        {/* <section class="r-bg-x zup sec-pad">
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-4">
      <div class="sol-img m-mt30">
        <img src="images/team-business.jpg" alt="reevan office" class="img-fluid">
      </div>
    </div>
    <div class="col-lg-7">
      <div class="pera-block ml50">
        <h2> Our <span class="ree-tt">Expertise. </span></h2>
        <p>We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.</p>
        <p>Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development. We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry.</p>
      </div>
    </div>
  </div>
  <div class="row mt30">
    <div class="col-lg-4 mt30">
      <div class="pera-block ml50">
        <h4>Customer Satisfaction.</h4>
        <p>We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.</p>
        <p>Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.</p>
      </div>
    </div>
    <div class="col-lg-4 mt30">
      <div class="pera-block ml50">
        <h4> Marketing Strategies</h4>
        <p>We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.</p>
        <p>Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.</p>
      </div>
    </div>
    <div class="col-lg-4 mt30">
      <div class="pera-block ml50">
        <h4>After-Sales Service.</h4>
        <p>We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.</p>
        <p>Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.</p>
      </div>
    </div>
  </div>
</div>
    </section> */}
        {/*end technologies*/}
        {/*start home review*/}
        {/* <section class="sec-pad bg-opcty" data-parallax="scroll" data-image-src="images/others/face-collage.png">
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="heading-review text-center">
        <h2 class="mb50">Our <span class="ree-text rt40">clients</span> <span class="ree-text rt40">praise</span> us for our great results</h2>
        <div class="testimonial-card-b owl-carousel mt30">
          <div class="review-slider">
            <h4 class="mb20">"Reevan build my startup business a great website that really helps current and	potential customers get a good feel for my company."</h4>
            <p>I am delighted with our new website. A1 service and design by Reevan. You can go with the Web Design Company, and I 100% recommend them to anyone. The perfect company to go to for your ideal website and digital marketing.</p>
            <div class="reviewers mt30">
              <div class="reviewers-nam">
                <h4>Anne Fibbiyon</h4>
                <p>Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
          <div class="review-slider">
            <h4 class="mb20">"Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company."</h4>
            <p>I was facing multiple issues with my old website and that i discovered reevan. they resolved all the problems in the website they also helped me with marketing. which has helped me to acquire more customers. Retention on the website has also increased.</p>
            <div class="reviewers mt30">
              <div class="reviewers-nam">
                <h4>Mayank Jhalana</h4>
                <p>Ajamer, Rajasthan</p>
              </div>
            </div>
          </div>
          <div class="review-slider">
            <h4 class="mb20">"Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company."</h4>
            <p>I was facing multiple issues with my old website and that i discovered reevan. they resolved all the problems in the website they also helped me with marketing. which has helped me to acquire more customers. Retention on the website has also increased.</p>
            <div class="reviewers mt30">
              <div class="reviewers-nam">
                <h4>Eric Shun</h4>
                <p>Nagpur, India</p>
              </div>
            </div>
          </div>
          <div class="review-slider">
            <h4 class="mb20">"Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company."</h4>
            <p>I was facing multiple issues with my old website and that i discovered reevan. they resolved all the problems in the website they also helped me with marketing. which has helped me to acquire more customers. Retention on the website has also increased.</p>
            <div class="reviewers mt30">
              <div class="reviewers-nam">
                <h4>Gene Jacket</h4>
                <p>Tuklic, UK</p>
              </div>
            </div>
          </div>
          <div class="review-slider">
            <h4 class="mb20">"Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company."</h4>
            <p>I was facing multiple issues with my old website and that i discovered reevan. they resolved all the problems in the website they also helped me with marketing. which has helped me to acquire more customers. Retention on the website has also increased.</p>
            <div class="reviewers mt30">
              <div class="reviewers-nam">
                <h4>Marion Gaze</h4>
                <p>Olivia, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div class="clients-creative-pic mt30">
          <div class="owl-dots" id="testimonials-avatar">
            <button class="dot-c1 tcc1 owl-dot mt30">  <img alt="image" src="images/user5.jpg"></button>
            <button class="dot-c1 tcc2 owl-dot mt30">  <img alt="image" src="images/user4.jpg"></button>
            <button class="dot-c1 tcc3 owl-dot active mt30">  <img alt="image" src="images/user3.jpg"></button>
            <button class="dot-c1 tcc4 owl-dot mt30">  <img alt="image" src="images/user2.jpg"></button>
            <button class="dot-c1 tcc5 owl-dot mt30">  <img alt="image" src="images/user1.jpg"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section> */}
        {/*end home review */}

        {/*start contact block*/}
        <section className="home-contact mt110 pb100">
          <div className="container">
            <div className="row">
              <div className="cta-info-tt">
                <div className="row justify-content-between">
                  <div className="col-lg-5 cinftt">
                    <div className="media">
                      <div className="ree-icon-set w80">
                        <img
                          src="images/project.png"
                          alt="web"
                          className="w-100"
                        />
                      </div>
                      <div className="ree-details-set pera-block">
                        <h4>
                          Want to kick start your project right now? Talk to
                          Experts.
                        </h4>
                        <a
                          href="contact-us.html"
                          className="ree-card-link mt30"
                        >
                          {" "}
                          Let's talk <i className="fas fa-arrow-right fa-btn" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 cinftt">
                    <div className="media">
                      <div className="ree-icon-set w80">
                        <img src="images/app.png" alt="web" className="w-100" />
                      </div>
                      <div className="ree-details-set pera-block">
                        <h4>
                          What you are looking for ? Website, Mobile App or
                          Digital Maketing?
                        </h4>
                        <a
                          href="contact-us.html"
                          className="ree-card-link mt30"
                        >
                          Request Call Back{" "}
                          <i className="fas fa-arrow-right fa-btn" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mt30">
                <div className="ourinfo">
                  <p>Email ID</p>
                  <h5>
                    <a href="mainto:info@vichaarlab.com">info@vichaarlab.com</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 mt30">
                <div className="ourinfo">
                  <p>Mobile Number</p>
                  <h5>
                    <a href="tel:7978542166">+91 9090972227</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 mt30">
                <div className="ourinfo">
                  <p>WhatsApp</p>
                  <h5>
                    <a href="https://wa.me/7978542166">+91 9090972227</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 mt30">
                <div className="ourinfo">
                  <p>Subscribe to Newsletter</p>
                  <div className="formnews">
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end contact block*/}
        {/*All js files*/}
        {/*Common Vichaar Lab script file*/}
      </div>
    </>
  );
};

export default Home;
