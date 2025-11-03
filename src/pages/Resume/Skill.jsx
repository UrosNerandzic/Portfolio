import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

function Skill() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    fetch("./skill.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color={"#66fcf1"} loading={loading} size={10} />
      ) : (
        <>
          {projects.map((project) => (
            <div key={project.id} className="icon-skills">
              <div className="skills">
                <div>
                  <img src={project.image} alt="" />
                  <p className="skills-name">{project.name}</p>
                  <span className="border"></span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
export default Skill;
