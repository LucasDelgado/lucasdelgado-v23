import { SiteConfig } from '@/site.config'
import './style.css'

export default function Experience() {
    const { list: experiences } = SiteConfig.sections.experience || {};
    return(
        <ul className="experience">
            {
                experiences.map((item) => {
                    return (
                        <li key={item.company} >
                            <p className="experience__date" >{item.date[0]} - {item.date[1]}</p>
                            <p className="experience__company">{item.company}</p>
                            <p className="experience__rol">{item.rol}</p>
                            <p className="experience__descrip">{item.description}</p>
                        </li>
                    )
                })
            }
        </ul> 
    )
}