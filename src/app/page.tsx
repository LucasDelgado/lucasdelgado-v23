import ArticleContent from "./components/articleContent";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import { MatchMediaWrapper } from "./components/matchMediaWrapper";
import Nav from "./components/nav";
import Skills from "./components/skills";

import "./page.css";

export default function Home() {

  return (
    <>
      <main itemScope itemType="http://schema.org/LocalBusiness">
        <Header />
        <section>
          <div className="container with-grid">
            <MatchMediaWrapper 
              desktopContent={
                <div className="with-grid__aside">
                  <div className="with-grid__aside__guia"></div>
                  <Nav />
                </div>
              }
              mobileContent={
                <div className="with-grid__aside">
                  <div className="with-grid__aside__guia"></div>
                  <Nav />
                </div>
              }
            />
            <div className="with-grid__content">
              <ArticleContent 
                title="Experience"
                component={ <Experience /> }
              />

              <ArticleContent 
                title="Education"
                component={ <Education /> }
              />

              <ArticleContent 
                title="Skills"
                component={ <Skills /> }
              /> 
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
