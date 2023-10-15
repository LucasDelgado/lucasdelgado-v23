import { SiteConfig } from "@/site.config";
import "./style.css";

export default function Skills() {
    const { skills } = SiteConfig.sections || {};

    return(
        <div className="skills">
            <ul>
                {
                    skills?.map((skill) => {
                        return(
                            <li key={skill.title}>
                                {skill.component}
                                <p>{skill.title}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div> 
    )    
}