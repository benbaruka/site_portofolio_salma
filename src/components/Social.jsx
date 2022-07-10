import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
 
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/salamabaruka/?hl=fr",
  },
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.salmacharlottebarukacom/",
  },
  { iconName: <FiTwitter />, link: "https://twitter.com/BarukaSalama" },

  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/feed/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
