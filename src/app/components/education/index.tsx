import { SiteConfig } from '@/site.config'
import './style.css'

export default function Education() {
    const { courses, main } = SiteConfig.sections.education || {};

    return(
        <div className="education">
            <div className="education__main">
                <p className="education__main__title">{main?.title}</p>
                <p className="education__main__inst">{main?.inst}</p>
                <p className="education__main__date">{main?.date}</p>
            </div>
            <div className="education__courses">
                <p className="education__courses__title">Courses</p>
                <ul className="education__courses__list">
                {
                    courses?.map((course, index) => {
                        return(
                            <li key={index}>
                                <p className="education__courses__list__title">{course.title}</p>
                                <p className="education__courses__list__inst">{course.inst}</p>
                                <p className="education__courses__list__date">{course.date}</p>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div> 
    )
}