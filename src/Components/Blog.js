
import React from 'react'
import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <>
  <div>
    <section className="blog-listing-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="blog-box-full">
              <Link to="#"><img src="/images/blog-1.jpeg" alt="Post1" title="Post1" /></Link>
              <div className="blog-ctnt">
                <h2>Why Your Real Estate Business Need CRM Solutions</h2>
                <ul className="aut-date">
                  <li><i className="far fa-user" />  Abhi</li>
                  <li><i className="fas fa-calendar-alt" /> May 14, 2024</li>
                </ul>
                <p>Save Time &amp; Money of Real Estate Business with CRM Software
                  <br />
                  We're in the age of competition, where every kind of business is chasing to achieve its goals, and a few of them are struggling to survive. That’s why CRM solutions play vital roles in boosting every business's sales...
                </p>
                <Link to="Whyrealestate">Read More  <i className="fas fa-angle-double-right" /></Link>
              </div>
            </div>
            <div className="blog-box-full">
              <Link to="#"><img src="https://www.iyroerp.com/blog/wp-content/uploads/2024/03/Problems-in-the-Manufacturing-Industry-that-ERP-Solves.png" alt="Post2" title="Post2" /></Link>
              <div className="blog-ctnt">
                <h2>Common Problems in the Manufacturing Industry that ERP Solves</h2>
                <ul className="aut-date">
                  <li><i className="far fa-user" />  Abhi</li>
                  <li><i className="fas fa-calendar-alt" /> May 14, 2024</li>
                </ul>
                <p>Improving efficiency and effectiveness is critical in agile manufacturing. However, challenges often prevent businesses from succeeding. Enterprise resource planning (ERP) systems are emerging as a solution to these challenges, transforming operations and solving common industry barriers. Before exploring the benefits of ERP in manufacturing, it is important to understand its definition, basic characteristics and importance in...</p>
                <a href="Commonissue">Read More  <i className="fas fa-angle-double-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="blog-sidebar">
              <h2>POPULAR POSTS</h2>
              <ul className="posts-list">
                <li><Link to="#">IYRO ERP Hailed as One of the Best ERP Software by Known SaaS Directory</Link></li>
                <li><Link to="#">Common Problems in the Manufacturing Industry that ERP Solves</Link></li>
                <li><Link to="#">Why you Need a Human Resource management System</Link></li>
                <li><Link to="#">Top ERP Software Provider in the Years of 2024</Link></li>
                <li><Link to="#">Maximizing Efficiency: How ERP Transforms The Hybrid Environment</Link></li>
                <li><Link to="#">IYRO ERP Hailed as One of the Best ERP Software by Known SaaS Directory</Link></li>
                <li><Link to="#">Common Problems in the Manufacturing Industry that ERP Solves</Link></li>
                <li><Link to="#">Why you Need a Human Resource management System</Link></li>
                <li><Link to="#">Top ERP Software Provider in the Years of 2024</Link></li>
                <li><Link to="#">Maximizing Efficiency: How ERP Transforms The Hybrid Environment</Link></li>
              </ul>
              <h2>CATEGORIES</h2>
              <ul className="posts-list">
                <li><Link to="#">Asset Management</Link></li>
                <li><Link to="#">CRM</Link></li>
                <li><Link to="#">Document Management</Link></li>
                <li><Link to="#">ERP</Link></li>
                <li><Link to="#">Financial Accountings</Link></li>
                <li><Link to="#">HRMS &amp; Payroll</Link></li>
                <li><Link to="#">Internet of Things</Link></li>
                <li><Link to="#">Asset Management</Link></li>
                <li><Link to="#">CRM</Link></li>
                <li><Link to="#">Document Management</Link></li>
                <li><Link to="#">ERP</Link></li>
                <li><Link to="#">Financial Accountings</Link></li>
                <li><Link to="#">HRMS &amp; Payroll</Link></li>
                <li><Link to="#">Internet of Things</Link></li>
              </ul>
              <h2>TAGS</h2>
              <ul className="tags-list">
                <li><Link to="#">Artificial Intelligence</Link></li>
                <li><Link to="#">Best ERP Software</Link></li>
                <li><Link to="#">Document Management</Link></li>
                <li><Link to="#">CRM</Link></li>
                <li><Link to="#">client relationship management</Link></li>
                <li><Link to="#">Cloud ERP</Link></li>
                <li><Link to="#">contact relationship management software</Link></li>
                <li><Link to="#">CRM computer software</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/*All js files*/}
    {/*Common Vichaar Lab script file*/}
  </div>

  </>
  )
}
  export default Blog

