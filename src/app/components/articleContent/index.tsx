import './style.css'

type Props = {
    title: string;
    component: React.ReactNode;
}

export default function ArticleContent({title, component}: Props ) {
    return(
        <article className="articleContent" id={title}>
            <h3 className="articleContent__title">{title}</h3>
            {component}
        </article>
    )
}