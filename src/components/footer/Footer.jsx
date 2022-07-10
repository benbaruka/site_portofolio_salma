import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://benfluxgroup.com"
              target="_blank"
              rel="noreferrer"
            >
              Benflux group
            </a>
            . All rights reserved.
          </p>
          <img src="/public/img/footer/dark.png" />
        </div>
      </div>
    </>
  );
};

export default Footer;
