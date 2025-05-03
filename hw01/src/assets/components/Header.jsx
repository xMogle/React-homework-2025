import React, { Component } from "react";
import "./Header.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <svg
            width="40"
            height="51"
            viewBox="0 0 40 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <g clipPath="url(#clip0_1_612)">
              <path
                d="M6.7453 32.9298C3.68548 29.1036 2.15105 24.8373 2.14203 20.131C2.14203 15.146 3.90211 10.8977 7.42227 7.38603C10.8881 3.96398 15.0761 2.21254 19.9864 2.13171C24.8875 2.1856 29.0845 3.93704 32.5777 7.38603C36.0978 10.8889 37.8579 15.1372 37.8579 20.131C37.8579 24.8463 36.3145 29.1126 33.2276 32.9298L26.3498 41.1211C26.3498 41.1211 25.2938 41.4444 24.7251 40.8517C24.4814 40.6092 14.8958 28.3762 14.8958 28.3762"
                stroke="#35B8BE"
                strokeWidth="5"
                strokeMiterlimit="3"
                strokeLinecap="square"
              />
              <path
                d="M13.7585 27.002C13.2689 26.4968 12.8989 25.8892 12.6754 25.2236C12.4525 24.556 12.3786 23.848 12.4587 23.1491C12.54 21.6671 13.1356 20.4548 14.273 19.4845C15.3832 18.5415 16.6558 18.1643 18.091 18.299C18.9575 18.3529 19.7157 18.5684 20.3926 19.0265C20.8838 19.2991 21.3236 19.6547 21.6923 20.0774L27.433 26.6789"
                stroke="#35B8BE"
                strokeWidth="5"
                strokeMiterlimit="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.0133 47.9921L6.7453 32.9298M25.4833 42.1989L13.7585 27.002L25.4833 42.1989Z"
                stroke="#35B8BE"
                strokeWidth="5"
                strokeMiterlimit="3"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_612">
                <rect width="40" height="51" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="nav-right">
          <div className="navbar-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Menu</a>
            <a href="#" className="nav-link">Company</a>
            <a href="#" className="nav-link">Login</a>
          </div>
        </div>

        <div className="navbar-right">
          <div className="cart-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M7 18c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2c1.103 0 2-.896 2-2s-.897-2-2-2zm10 0c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2c1.103 0 2-.896 2-2s-.897-2-2-2zM7.002 14h9.995c.828 0 1.554-.501 1.855-1.252l3.934-9.392a1 1 0 0 0-.932-1.356H5.21L4.27 0H0v2h3l3.6 7.59-1.35 2.45C4.52 12.37 5.48 14 7.002 14z" />
            </svg>
            <span className="cart-badge">{this.props.cartCount}</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
