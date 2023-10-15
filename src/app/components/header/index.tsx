'use client'
import { Bebas_Neue } from "next/font/google";
import { SiteConfig } from "../../../site.config";
import { Link, animateScroll as scroll } from "react-scroll";

const bebasNeue = Bebas_Neue({
    display: "swap",
    subsets: ["latin"],
    weight: ["400"],
});

export default function Header() {
    return (
        <header>
            <h1 className={bebasNeue.className}>{SiteConfig.main.title}</h1>
            <div className="container">
                <div className="bajada">
                    <div>
                        <h2>{SiteConfig.main.rol}</h2>
                        <address>Buenos Aires, Argentina</address>
                    </div>
                    <div className="bajada__social">
                        <ul>
                            {
                                SiteConfig.sections.contact.map((item) => {
                                    return (
                                        <li key={item.link}>
                                            <a href={item.link} target="_blank">{item.component}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Link
                to="Experience"
                className="btn__scroll"
                smooth={true}
                offset={0}
                duration={200}>
            down
            </Link>
        </header>
    )
}