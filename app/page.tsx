import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Certifications from './_components/Certifications';
import Education from './_components/Education';
import Experiences from './_components/Experiences';
import ProjectList from './_components/ProjectList';
import Skills from './_components/Skills';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Education />
            <Experiences />
            <Certifications />
            <ProjectList />
        </div>
    );
}
