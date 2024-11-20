import { useState, useEffect } from 'react'
import '../css/header.css'


const Header = () => {
    const [logo, setLogo] = useState(true);
    const [header, setHeader] = useState(false)

    function logoChange() {
        // setLogo(false);
    }

    function logoNormal() {
        setLogo(true);
    }

    const position = {
        boxShadow: '1px 2px 10px #000000',
        backgroundColor: '#00000090'
    }

    useEffect(() => {
        window.addEventListener("scroll", function(){
            scrollY > 1 ? setHeader(true) : setHeader(false)
        }
        )
    }, [])
    return (
        <header style={header? position: {}}>
            <nav>
                {/* <h1 onMouseLeave={logoNormal} onMouseEnter={logoChange}>{logo?"Anukool S..C...":"Anukool Singh Chauhan"}</h1> */}
            </nav>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header