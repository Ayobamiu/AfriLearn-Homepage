import React, { Component } from "react";
import afri_logo from "../images/afri_logo.png";

class NavBar extends Component {
  state = {};

  handleToggle = () => {
    const items = document.querySelectorAll(".navbar__item");
    const toggle = document.getElementById("toggle");
    if (toggle.classList.contains("fa-bars")) {
      toggle.classList.replace("fa-bars", "fa-times");
    } else {
      toggle.classList.replace("fa-times", "fa-bars");
    }
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      if (item.style.display === "block") {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    }
  };
  render() {
    return (
      <div className="navbar">
        <a href="#" className="navbar__item--logo">
          <img
            src={afri_logo}
            alt="afri_logo"
            className="navbar__item--logo--img"
          />
        </a>
        <a href="#" className="navbar__item">
          Categories
        </a>
        <p className="navbar__item__search">
          <div className="navabr__item--search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search courses"
              className="navabr__item--search--input"
            />
          </div> 
        </p>
        <a href="#" className="navbar__item">
          Subscriptions
        </a>
        <a href="#" className="navbar__item">
          Teach on AfriLearn
        </a>
        <a href="#" className="navbar__item">
          <i className="fa fa-shopping-cart"></i>
        </a>
        <a href="#" className="navbar__item navbar__item--login">
          Login
        </a>
        <a href="#" className="navbar__item navbar__item--sign-up">
          Sign up
        </a>
        <a
          href="#"
          onClick={this.handleToggle}
          className="navbar__item--toggle"
        >
          <i className="fa fa-bars" id="toggle"></i>
        </a>
      </div>
    );
  }
}

export default NavBar;
