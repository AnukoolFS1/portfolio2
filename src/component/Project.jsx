import '../css/projects.css'

const Projects = () => {

    const projects = [{
        name: "Static Web Page",
        description: "An static web page with tech-stack of HTML, CSS. My first project to show case my designing. the project was copied from BootstrapMade GP design",
        link: "https://papaya-cannoli-f75b68.netlify.app"
    }, {
        name: "Calculator",
        description: "Designed a calculator with tech-stack of HTML, CSS, JavaScript",
        link: "https://kaleidoscopic-halva-853976.netlify.app"
    }, {
        name: "Pokemon Api Cards App",
        description: "An reactJS app using the pokemonapi. The project showcases my react's both single-page and multi-page app ability",
        link: "https://pokeapicardsapp.-netlify.app/"
    }, {
        name: "Portfolio",
        description: "Apart from this portfolio page, I have built another portfolio app which had opened my hands on exprience over reactJS",
        link: "https://myportfolio-asc.netlify.app/"
    }, {
        name: "Interactive Web Page",
        description: "An interactive web page which includes the techs HTML, CSS, JavaScript. However, this was an interview assignment which was failed due not submitting on time.",
        link: "https://anukoolfs1.github.io/-InterviewAssignment/"
    }]

    return (
        <section className='project' id='project'>
            <h1>Projects</h1>
            <div>
                {
                    projects.map(e => {
                        return (
                            <article key={e.name}>
                                <h2>{e.name}</h2>
                                <p>{e.description}</p>
                                <a href={e.link}>{e.link}</a>
                            </article>)
                    })
                }
            </div>
        </section>
    )
}

export default Projects