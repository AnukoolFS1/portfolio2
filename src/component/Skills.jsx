import '../css/skill.css';
import 'boxicons'

const Skills = () => {
    // const skills = {
    //     frontend: ['HTML', 'CSS', 'JavaScript', "Typescript", "ReactJS"],
    //     backend: ["Node.JS", "Express", "MongoDB"]
    // }

    const skills = {
        frontend: [{ logo: "html5", skill: "Html" }, { logo: "css3", skill: "CSS" }, { logo: "bootstrap", skill: "Bootstrap" }, { logo: "javascript", skill: "JavaScript" }, { logo: "typescript", skill: "TypeScript" }, { logo: "react", skill: "ReactJS" }],
        backend: [{ logo: "nodejs", skill: "Node.js" }, { logo: "nodejs", skill: "Express" }, { logo: "mongodb", skill: "MongoDB" }]
    }

    return (
        <section id='skills'>
            <h1>Skills</h1>
            <article>
                <div>
                    <h1>Frontend</h1>
                    <ul>
                        {skills.frontend.map(skill => (<li key={skill.skill}><span><box-icon type="logo" color="#ffffff" name={skill.logo}></box-icon></span>{skill.skill}</li>))}
                    </ul>
                </div>
                <div>
                    <h1>Backend</h1>
                    <ul>
                        {skills.backend.map(skill => (<li key={skill.skill}><span><box-icon type="logo" color="#ffffff" name={skill.logo}></box-icon></span>{skill.skill}</li>))}
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Skills