import React from "react";
import Link from "next/link";
import styles from "./navigation.scss";

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <div className="nav buttons">
      <Link as="/desktop" href="/desktop" prefetch>
        <a className="nav-item">
          Desktop
        </a>
      </Link>
      <a href="https://medium.com/nteract" target="_blank" className="nav-item">
        Atom
      </a>
      <Link as="/kernels">
        <a href="/kernels" prefetch className="nav-item">Kernels</a>
      </Link>
      <div className="icon-buttons buttons">
        <a
          href="https://slackin-nteract.now.sh/"
          target="_blank"
          className="button button-secondary button-icon-only"
          title="Join us on Slack!"
        >
          <div className="button-wrapper">
            <div className="button-icon">
              <svg viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M10.23,11.16L12.91,10.27L13.77,12.84L11.09,13.73L10.23,11.16M17.69,13.71C18.23,13.53 18.5,12.94 18.34,12.4C18.16,11.86 17.57,11.56 17.03,11.75L15.73,12.18L14.87,9.61L16.17,9.17C16.71,9 17,8.4 16.82,7.86C16.64,7.32 16.05,7 15.5,7.21L14.21,7.64L13.76,6.3C13.58,5.76 13,5.46 12.45,5.65C11.91,5.83 11.62,6.42 11.8,6.96L12.25,8.3L9.57,9.19L9.12,7.85C8.94,7.31 8.36,7 7.81,7.2C7.27,7.38 7,7.97 7.16,8.5L7.61,9.85L6.31,10.29C5.77,10.47 5.5,11.06 5.66,11.6C5.8,12 6.19,12.3 6.61,12.31L6.97,12.25L8.27,11.82L9.13,14.39L7.83,14.83C7.29,15 7,15.6 7.18,16.14C7.32,16.56 7.71,16.84 8.13,16.85L8.5,16.79L9.79,16.36L10.24,17.7C10.38,18.13 10.77,18.4 11.19,18.41L11.55,18.35C12.09,18.17 12.38,17.59 12.2,17.04L11.75,15.7L14.43,14.81L14.88,16.15C15,16.57 15.41,16.84 15.83,16.85L16.19,16.8C16.73,16.62 17,16.03 16.84,15.5L16.39,14.15L17.69,13.71M21.17,9.25C23.23,16.12 21.62,19.1 14.75,21.17C7.88,23.23 4.9,21.62 2.83,14.75C0.77,7.88 2.38,4.9 9.25,2.83C16.12,0.77 19.1,2.38 21.17,9.25Z"
                />
              </svg>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/nteract"
          target="_blank"
          className="button button-secondary button-icon-only"
          title="Find us on GitHub."
        >
          <div className="button-wrapper">
            <div className="button-icon">
              <svg viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </div>
          </div>
        </a>
        <a
          href="https://twitter.com/nteractio"
          target="_blank"
          className="button button-secondary button-icon-only"
          title="Stay up-to-date with us on Twitter."
        >
          <div className="button-wrapper">
            <div className="button-icon">
              <svg viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
);
