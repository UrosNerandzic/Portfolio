import { FaBookReader } from "react-icons/fa";
import TimelineItem from "./TimelineItem";

// import Skill from "./Skill";
import Skill from "./Skill";
// const uros = [
//   "* Jonas Schmedtmann :",
//   <br />,
//   "- Javacript",
//   <br />,
//   "- The Ultimate React Course 2024: React, Redux & More",
//   <br />,

//   "* Maximilian Schwarzmüller :",
//   <br />,
//   "React - The Complete Guide 2024 (incl. React Router & Redux)",
//   <br />,

//   "* Marcelo Xavier Vierira :",
//   <br />,
//   "WordPress Theme Development",
// ];
function Resume() {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* expirience */}
      <div className="two-timeline">
        <div className="timeline ">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaBookReader />
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            <TimelineItem
              title="Omnius - Marketing agency"
              description="Web developer"
            />
            <TimelineItem
              title="Freelance CuraVita"
              description="Website using PHP, JavaScript, Sass, and Bootstrap."
            />
            <TimelineItem
              title="Freelance Irkom"
              description="Basic html, css, javascript "
            />
            <TimelineItem
              title="Freelance Aleksandrija Fruska Gora "
              description="Wordpress website and woocommerce  "
            />
            <TimelineItem
              title="Freelance Savez hokeja na travi Beograd "
              description="Wordpress website"
            />
            <TimelineItem
              title="Freelance Boris Deheljan "
              description="Wordpress website"
            />
          </ol>
        </div>
        {/* education */}
        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaBookReader />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <TimelineItem
              title="Megatrend"
              description="Faculty of Business
            studies"
            />
            <TimelineItem
              title="Gymnasium"
              description="The Seventh Belgrade
            Gymnasium"
            />
            <TimelineItem
              title="Cubes School"
              description="Online Frontend & Word Press"
            />
            <TimelineItem
              title="Udemy Courses"
              description="Maximilian Schwarzmüller, Jonas Schmedtmann"
            />
          </ol>
        </div>
      </div>
      {/* skils section */}

      <div>
        <h3 className="h3 skills-title">My Skills</h3>
        <Skill />
      </div>
    </section>
  );
}

export default Resume;
