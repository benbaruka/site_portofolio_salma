import React from "react";

const socialList = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/salma.baruka.5",
  },
  {
    name: "linkdin",
    link: "https://www.linkdin.net/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
  },
];

const SocialTwo = () => {
  return (
    <ul>
      {socialList.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <span className="first">{val.name}</span>
            <span className="second">{val.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
