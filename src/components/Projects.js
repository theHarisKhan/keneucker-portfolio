import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <div className="projects-section">
        <ProjectCard
          img={`/imgur_logo.png`}
          title={`imgur`}
          description={`In 2021 I became the author and maintainer of the npm project imgur a project I had been contributing to for several years, when the original author passed the project on for continued active development. I have since released imgur@2.0.0 which is a newly isomorphic library written in TypeScript. I am happy to be part of such a project and I look forward to contributing to Free and Open-Source Software any moment I can.<br/><br/>Most of the work I do is behind the scenes, which means that the better job I do the more unlikely you are to be able to notice it. I have a mind for the functional and when I connect technologies, they just work. I am actively growing my skills on the artistic, aesthetically pleasing, and streamlined aspects of UX with software and am a student of the sciences of human-computer interaction.`}
          techs={`JavaScript`}
          Github={`https://github.com/KenEucker/imgur`}
          LiveLink={`https://www.npmjs.com/package/imgur`}
        />
        <ProjectCard
          img={`/Tag-Logo-Stacked-V2.png`}
          title={`Biketag-Vue`}
          description={`create a tool to play the game of BikeTag easier than it was currently being played. So that year we (my friend & I) launched a tool that uploaded two images (found it tag, new mystery location) and provided fields for credit and a hint for the next round. That project continues to evolve and we have successfully scaled the project to include 7 cities across the world including: Indianapolis, Indiana, Inverness, Scotland, and Vienna, Austria! I started this endeavor as an entirely open source project. You can see how that project on Github (click below)`}
          techs={`JavaScript, Vue, Api`}
          Github={`https://github.com/KenEucker/biketag-vue`}
          LiveLink={`https://biketag.org/`}
        />
        <ProjectCard
          img={`/biketag-api-logo.jpg`}
          title={`Biketag-Api`}
          description={`The javascript client for interacting with BikeTag games.`}
          techs={`JavaScript`}
          Github={`https://github.com/KenEucker/biketag-api`}
          LiveLink={`https://keneucker.github.io/biketag-api/`}
        />
      </div>
    </>
  );
}

export default Projects;
