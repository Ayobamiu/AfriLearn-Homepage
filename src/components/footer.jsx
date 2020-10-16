import React, { Component } from "react";
import afri_logo from "../images/afri_logo.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer-link-list">
          <div className="footer-link-list-links">
            <a href="#" className="footer-link-list-link">
              AfriLearn for Business
            </a>
            <a href="#" className="footer-link-list-link">
              Teach on AfriLearn
            </a>
            <a href="#" className="footer-link-list-link">
              Get the app
            </a>
            <a href="#" className="footer-link-list-link">
              About us
            </a>
            <a href="#" className="footer-link-list-link">
              Contact us
            </a>
          </div>
          <div className="footer-link-list-links">
            <a href="#" className="footer-link-list-link">
              Careers
            </a>
            <a href="#" className="footer-link-list-link">
              Blog
            </a>
            <a href="#" className="footer-link-list-link">
              help and Support
            </a>
            <a href="#" className="footer-link-list-link">
              Affiliate
            </a>
          </div>
          <div className="footer-link-list-links">
            <a href="#" className="footer-link-list-link">
              Terms
            </a>
            <a href="#" className="footer-link-list-link">
              Privacy policy and cookie policy
            </a>
            <a href="#" className="footer-link-list-link">
              Sitemap
            </a>
            <a href="#" className="footer-link-list-link">
              Featured courses
            </a>
          </div>
          <div className="footer-link-list-select-lang">
            <i className="fa fa-globe"></i>
            <select name="lang" id="lang">
              <option value="eng">English</option>
            </select>
          </div>
        </div>
        <div className="footer-copyright">
          <img src={afri_logo} alt="" />
          <p>© 2020 AfriLearn, Inc.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
