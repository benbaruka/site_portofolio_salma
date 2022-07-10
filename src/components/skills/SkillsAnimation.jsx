import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const educationContent = [
  {
    Annees: "2001-2007",
    Niveaux: "Ecoles Primaire",
    institution: "karisimbi/Goma",
  },
  {
    Annees: "2008-2013",
    Niveaux: "Humanités Sécondaire",
   institution: "College Mwanga",
  },
  {
    Annees: "2014-2019",
    Niveaux: "Université",
    institution: "Ulpgl/Goma",
  },
];

const skillsContent = [
  {
    name: "Modeliste",
    skillPercent: "85",
  },
  {
    name: "Styliste",
    skillPercent: "79",
  },
  {
    name: "Informatique basique",
    skillPercent: "71",
  },
  {
    name: "Photoshop",
    skillPercent: "52",
  },
  {
    name: "inspiration",
    skillPercent: "90",
  },
];

const awardContent = [
  {
    awardYear: "2020",
    degree: "Best Developer",
    instituteName: "University Of Melbourne, NA",
  },
  {
    awardYear: "2019",
    degree: "Best Writter",
    instituteName: "Online Typodev Soluation Ltd.",
  },
  {
    awardYear: "2007",
    degree: "Best Freelancer ",
    instituteName: "Fiver & Upwork Level 2 & Top Rated",
  },
];
const experienceContent = [
  {
    designation: "Sr. Software Tester",
    jobType: "Full Time | Remote",
    year: "2020 - Present",
    compnayName: "Google Inc.",
    descriptions:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "",
  },
  {
    designation: "Sr. Graphic Designer",
    jobType: "Part Time | Office",
    year: "2018 - 2019",
    compnayName: "Avada Theme.",
    descriptions:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "200",
  },
  {
    designation: "Cr. Web Developer",
    jobType: "Full Time | InHouse",
    year: "2016 - 2017",
    compnayName: "ib-themes ltd.",
    descriptions:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "",
  },
  {
    designation: "Jr. Web Developer",
    jobType: "Full Time | Remote",
    year: "2014 - 2015",
    compnayName: "Creative Gigs.",
    descriptions:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "200",
  },
];

const SkillsAnimation = () => {
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab> Education & Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            <div className="resume_inner">
              <div className="row">
                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Education</label>
                      </h4>
                      <ul>
                        {educationContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.Annees}</span>
                            <p>
                              <span>{val.Niveaux}</span> - {val.institution}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="skills ">
                    <h4>
                      <label>Skills</label>
                    </h4>
                    <div className="beny_progress">
                      {skillsContent.map((val, i) => (
                        <div className="progress_inner" key={i}>
                          <span>
                            <span className="label">{val.name}</span>
                            <span className="number">{val.skillPercent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End .col-5 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Awards</label>
                      </h4>
                      <ul>
                        {awardContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.awardYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                <div
                  className="col-6"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDealy}
                >
                  <div className="resume-box-01">
                    <h5>{val.designation}</h5>
                    <h6>{val.jobType}</h6>
                    <span>{val.year}</span>
                    <div className="hr"></div>
                    <h4>
                      <label>{val.compnayName}</label>
                    </h4>
                    <p>{val.descriptions}</p>
                  </div>
                </div>
                //  End .col
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsAnimation;
