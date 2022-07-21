import React from "react";

const Address = () => {
  return (
    <ul>
      <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel:+243999504845">+243 (0) 999 504 845</a>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:barukasalama10@gmail.com">barukasalama10@gmail.com</a>
        </span>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
          Goma ville
          <br /> RDCongo
        </span>
      </li>
    </ul>
  );
};

export default Address;
