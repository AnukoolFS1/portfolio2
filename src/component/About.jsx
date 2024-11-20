import { useState, useEffect } from "react"
import '../css/about.css'

const About = () => {
    const [about, setAbout] = useState([])
    const aboutarr = []
    const aboutData = {
        "Name": "Anukool Singh Chauhan",
        "Profession": "Full-Stack Developer",
        "Email": "ascmailing0@gmail.com",
        "Phone": "9560095435",
        "Address": "Fatehpur Beri, New Delhi",
    }

    for (let x in aboutData) {
        // setAbout(prev => ([...prev, (<tr key={x}><th>{x}</th><td>{aboutData[x]}</td></tr>)]))
        aboutarr.push((<tr key={x}><th>{x}</th><td>{aboutData[x]}</td></tr>))
    }

    return (
        <section className="about" id="about">
            {/* <div><img src="" alt="" /></div> */}
            <article>
                <h1>About Me</h1>
                <article>
                    <p>Hi, I'm Anukool, a passionate Full Stack Developer specializing in building efficient and scalable backend systems. With experience in creating full-stack web applications, I thrive on transforming complex ideas into seamless user experiences</p>
                    <p>My technical toolkit includes technologies like HTML, CSS, JavaScript, ReactJS, Redux, Node.js, Express.js, MongoDB, and I'm diving deeper into 
                    backend skills to enhance my backend expertise.</p>
                    <p>With a curiosity-driven approach to problem-solving, I thrive on turning challenges into opportunities for growth. My work philosophy emphasizes practical solutions and continuous improvement to make a meaningful impact.</p>
                    <p>I'm looking forward to contributing to innovative projects, refining my backend skills, and growing into a proficient software engineer while exploring cutting-edge technologies.</p>
                </article>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}><h2>PERSONAL INFO</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {aboutarr}
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default About