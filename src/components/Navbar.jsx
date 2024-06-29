import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>

            </div>
            <div className="m-8 flex items-center justify-center text-2xl gap-4">
                <a href="https://github.com/Simran123-cpu" target="blank" >
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/simran2003/" target="blank"  >
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/c_codingly/" target="blank" >
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/channel/UC6kBxXnhWiY-bc1RTO8kLxw" target="blank"  >
                    <FaYoutube />
                </a>

            </div>
        </nav>
    )
}

export default Navbar
