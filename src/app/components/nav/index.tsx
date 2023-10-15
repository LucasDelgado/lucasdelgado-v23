'use client'
import { Link, animateScroll as scroll } from "react-scroll";
import { SiteConfig } from "@/site.config";
import './style.css'
import { ContactSVG } from "../svg";

export default function Nav() {
    const { nav: navLink } = SiteConfig;
    const scrollToBottom = () => scroll.scrollToBottom({duration:350, smooth:true});

    return(
        <>
            <nav className="nav">
                {
                    navLink.map((item) => {
                        return (
                            <Link 
                                key={item.name} 
                                to={item.name}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={200}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </nav>
        <a  className="btn__contact" onClick={scrollToBottom}>
            <ContactSVG />
        </a>
        </>
    )
}