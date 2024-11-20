import '../css/footer.css'

const Footer = () => {

    return (
        <footer id='contact'>
            <div>
                <h1>Connect with me on</h1>
                {/* <ul>
                    <li>Phone: <a href="tel:+919560095435">9560095435</a></li>
                    <li>Mail:<a href="mailto:ascmailing0@gmail.com"> ascmailing0@gmail.com</a></li>
                    <li>LinkedIn: <a href="">Anukool Singh Chauhan</a></li>
                    <li>Github: <a href="">AnukoolFS1</a></li>
                </ul> */}
                <table>
                    <tbody>
                        <tr>
                            <th>Phone:</th>
                            <td><a href="tel:+919560095435">9560095435</a></td>
                        </tr>
                        <tr>
                            <th>Mail:</th>
                            <td><a href="tel:+919560095435">ascmailing0@gmail.com</a></td>
                        </tr>
                        <tr>
                            <th>LinkedIn:</th>
                            <td><a href="https://www.linkedin.com/in/anukool-singh-chauhan---">Anukool Singh Chauhan</a></td>
                        </tr>
                        <tr>
                            <th>Github:</th>
                            <td><a href="https://github.com/AnukoolFS1/">AnukoolFS1</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </footer>)
}

export default Footer