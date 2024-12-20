import '../css/hero.css'
import img from "../assets/1000001009.jpg"

const Hero = () => {

    return (
        <section className="hero" id='hero'>
            <article>
                <h1>
                    Hi, I'm Anukool.
                </h1>
                <h2>
                    Full-stack web developer passionate about building scalable applications and delivering seamless user experiences.
                </h2>
            </article>
            <div>
                <img src={img} alt="" />
            </div>
        </section>
    )
}

export default Hero