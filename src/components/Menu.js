import { Link, animateScroll as scroll } from "react-scroll";

export default function Menu({bar,Setbar,click}) {
  return (
    <div  className='main-bar'>
        <ul>
            <li>
                	
                <Link
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><a onClick={click}>Home</a></Link>
            </li>
            <li>
            <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                >About</Link>
            </li>
            <li>
            <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={40}
                    duration={500}
                >Projects</Link>
            </li>
            <li>
            <Link
                    activeClass="active"
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                >Skills</Link>
            </li>

            <li>
            <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link>
            </li>
        </ul>
    </div>
  )
}
