import React, { Component } from "react";
import level_up from "../images/level_up.jpg";
import investment from "../images/investment.jpg";
import course_two from "../images/course_two.jpg";
import course_one from "../images/course_one.jpg";
import interior from "../images/interior.jpg";
import profile from "../images/profile.jpg";
import adidas from "../images/adidas.svg";
import volkswagen from "../images/volkswagen.svg";
import mercedes from "../images/mercedes.svg";
import eventbrite from "../images/eventbrite.svg";
import booking from "../images/booking.svg";
import transform from "../images/transform.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <section className="home-section-one">
          <img src={level_up} alt="" className="home-section-one--image" />
          <div className="home-section-one--call-to-action">
            <h1> Start now</h1>
            <p>
              Learn the latest skills to reach your
              professional goals.
            </p>
            <div className="home-section-one--call-to-action--search">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="What are you looking for?"
              />
              <i className="fa fa-search"></i>
            </div>
          </div>
        </section>
        <section className="home-section-courses">
          <div className="home-section-courses--up">
            <h1 className="home-section-courses--head">
              The world's largest selection of courses
            </h1>
            <p className="home-section-courses--para">
              Choose from online video courses provided by our seasoned teachers, animators, and developers
            </p>
          </div>
          <div className="home-section-courses-list">
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={investment} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
               Aminu Edward
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star "></i>
                <i className="fa fa-star "></i>
                <i className="fa fa-star "></i>
                <i className="fa fa-star "></i>
                <i className="fa fa-star "></i>
                <i className="fa fa-star-half "></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={course_two} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Richard Awe
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={investment} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Joseph Phillips
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={course_one} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Sonde Uche
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={course_two} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Yvonne Mike
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={investment} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Joseph Phillips
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={course_two} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Mide Odoo
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={investment} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Abubarka Elen
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={course_two} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Jonathan Wood
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
            <div className="home-section-courses-list-course">
              <div className="home-section-courses-list-course--image">
                <img src={course_one} alt="" />
              </div>
              <div className="home-section-courses-list-course--title">
                Beginning Project Management: Project Management Level One
              </div>
              <div className="home-section-courses-list-course--author">
                Joseph Phillips
              </div>
              <div className="home-section-courses-list-course--rating">
                <span className="home-section-courses-list-course--rating-rate">
                  4.5
                </span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>(7,416)</span>
              </div>
              <div className="home-section-courses-list-course--price">
                <span className="home-section-courses-list-course--price-new">
                  $17.99
                </span>
                <span className="home-section-courses-list-course--price-old">
                  $125.99
                </span>
              </div>
              <div className="home-section-courses-list-course--bestseller">
                Bestseller
              </div>
            </div>
          </div>
        </section>

        <section className="home-section-personal-recommendations">
          <h1>Get personal learning recommendations</h1>
          <p>Answer a few questions for your top picks</p>
          <a href="#">Get started</a>
        </section>
        <section className="home-section-top-categories">
          <h1 className="home-section-top-categories-head">Top Categories</h1>
          <div className="home-section-top-categories-list">
            <div className="home-section-top-categories-list-category">
              <div className="home-section-top-categories-list-category-image">
                <img
                  src={interior}
                  alt=""
                  className="home-section-top-categories-list-category-image-img"
                />
              </div>
              <div className="home-section-top-categories-list-category-text">
                Design
              </div>
            </div>
            <div className="home-section-top-categories-list-category">
              <div className="home-section-top-categories-list-category-image">
                <img
                  src={interior}
                  alt=""
                  className="home-section-top-categories-list-category-image-img"
                />
              </div>
              <div className="home-section-top-categories-list-category-text">
                Development
              </div>
            </div>
            <div className="home-section-top-categories-list-category">
              <div className="home-section-top-categories-list-category-image">
                <img
                  src={interior}
                  alt=""
                  className="home-section-top-categories-list-category-image-img"
                />
              </div>
              <div className="home-section-top-categories-list-category-text">
                Marketing
              </div>
            </div>
            <div className="home-section-top-categories-list-category">
              <div className="home-section-top-categories-list-category-image">
                <img
                  src={interior}
                  alt=""
                  className="home-section-top-categories-list-category-image-img"
                />
              </div>
              <div className="home-section-top-categories-list-category-text">
                IT and Software
              </div>
            </div>
            <div className="home-section-top-categories-list-category">
              <div className="home-section-top-categories-list-category-image">
                <img
                  src={interior}
                  alt=""
                  className="home-section-top-categories-list-category-image-img"
                />
              </div>
              <div className="home-section-top-categories-list-category-text">
                Personal Development
              </div>
            </div>
            <div className="home-section-top-categories-list-category">
              <div className="home-section-top-categories-list-category-image">
                <img
                  src={interior}
                  alt=""
                  className="home-section-top-categories-list-category-image-img"
                />
              </div>
              <div className="home-section-top-categories-list-category-text">
                Photography
              </div>
            </div>
            <div className="home-section-top-categories-list-category">
              <div className="home-section-top-categories-list-category-image">
                <img
                  src={interior}
                  alt=""
                  className="home-section-top-categories-list-category-image-img"
                />
              </div>
              <div className="home-section-top-categories-list-category-text">
                Music
              </div>
            </div>
            <div className="home-section-top-categories-list-category">
              <div className="home-section-top-categories-list-category-image">
                <img
                  src={interior}
                  alt=""
                  className="home-section-top-categories-list-category-image-img"
                />
              </div>
              <div className="home-section-top-categories-list-category-text">
                Interior
              </div>
            </div>
          </div>
        </section>

        <section className="home-section-become-an-instructor home-section-become-an-instructor-grey">
          <div className="home-section-become-an-instructor-media">
            <div className="home-section-become-an-instructor-media-image">
              <img
                src={profile}
                alt=""
                className="home-section-become-an-instructor-media-image-img"
              />
            </div>
          </div>
          <div className="home-section-become-an-instructor-text">
            <h1>Become an instructor</h1>
            <p>
              Top instructors from around the world teach millions of students
              on AfriLearn. We provide the tools and skills to teach what you love.
            </p>
            <a href="#">start teaching today</a>
          </div>
        </section>

        <section className="home-section-trusted-companies">
          <h1 className="home-section-trusted-companies-head">
            Trusted by companies of all sizes
          </h1>
          <div className="home-section-trusted-companies-list">
            <img
              src={adidas}
              alt=""
              className="home-section-trusted-companies-image"
            />
            <img
              src={booking}
              alt=""
              className="home-section-trusted-companies-image"
            />
            <img
              src={eventbrite}
              alt=""
              className="home-section-trusted-companies-image"
            />
            <img
              src={mercedes}
              alt=""
              className="home-section-trusted-companies-image"
            />
            <img
              src={volkswagen}
              alt=""
              className="home-section-trusted-companies-image"
            />
          </div>
        </section>

        <section className="home-section-become-an-instructor home-section-become-an-instructor-green">
          <div className="home-section-become-an-instructor-text">
            <h1>AfriLearn for Business</h1>
            <p>
              Get unlimited access to 5,000+ of AfriLearn’s top courses for your
              team.
            </p>
            <a href="#">Get AfriLearn for Business</a>
          </div>
          <div className="home-section-become-an-instructor-media">
            <div className="home-section-become-an-instructor-media-image">
              <img
                src={profile}
                alt=""
                className="home-section-become-an-instructor-media-image-img"
              />
            </div>
          </div>
        </section>

        <section className="home-section-transform-your-life">
          <div className="home-section-transform-your-life-media">
              <img src={transform} alt=""/>
              <i className="fa fa-play"></i>
          </div>
          <div className="home-section-transform-your-life-text">
            <h1>Transform your life through education</h1>
            <p>
              Musa Adewale Ebuka launched a new career in software development by
              taking courses on AfriLearn. What will you be able to do?
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
