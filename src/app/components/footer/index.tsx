import { SiteConfig } from "@/site.config";
import "./style.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <h2 className="footer__title">Lucas Delgado</h2>
                    <p  className="footer__subtitle">FullStack Developer</p>

                </div>
                <div>
                    <ul className="social">
                        {
                            SiteConfig.sections.contact.map((item) => {
                                return (
                                    <li key={item.link}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div> 
            </div>
            <p className="copy">- © {year} -</p>
        </footer>
    )
}