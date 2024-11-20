import '../css/skill.css'

const Skills = () => {
    const skills = {
        frontend: ['HTML', 'CSS', 'JavaScript', "Typescript", "ReactJS"],
        backend: ["Node.JS", "Express.JS", "MongoDB"]
    }

    return (
        <section id='skills'>
            <h1>Skills</h1>
            <article>
                <div>
                    <h1>Frontend</h1>
                    <ul>
                        {skills.frontend.map(skill => (<li key={skill}>{skill}</li>))}
                    </ul>
                </div>
                <div>
                    <h1>Backend</h1>
                    <ul>
                        {skills.backend.map(skill => (<li key={skill}>{skill}</li>))}
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Skills