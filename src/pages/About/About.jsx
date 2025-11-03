import Service from "./service";

const servicesData = [
  {
    title: "Web development",
    icon: "./images/icon-dev.svg",
    description: "High-quality development of sites at the professional level.",
  },
  {
    title: "Web App development",
    icon: "./images/full-stack-developer-icon.svg",
    description:
      "My goal is to create apps that are intuitive to use and that fit your needs.",
  },
];

function About() {
  return (
    <section className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section>
        <p className="about-text">
          Hi! I’m a Web Developer passionate about building websites that develop businesses.
I specialize in Webflow, Next.js, and WordPress, creating fast, elegant, and user-focused web experiences.
Currently, I’m primarily working on Webflow projects and custom WordPress themes, combining design precision with clean, efficient code to deliver high-quality results.
        </p>
        <p className="about-text">
          Collaboration and continuous improvement are core to my approach, and
          I thrive in dynamic environments where I can contribute and grow.
        </p>
      </section>
      {/* services */}
      <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default About;
