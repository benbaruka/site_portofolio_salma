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
          <img src="img/footer/img.png" />
        </div>
        <h6 style={{"background":"transparent","opacity":"90%","margin":"0,auto","color":"white"}}> Ce site est en cours de construction </h6>
      </div>
    </>
  );
};

export default Footer;
