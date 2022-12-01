import AboutInfo from "./AboutInfo";
import TimeLineBox from "./TimeLineBox";
import Image from "next/image";
import { useState } from "react";

function About() {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  return (
    <>
      <div className="about-section">
        <div className="about-top">
          <AboutInfo />
          <div className="about-info">
            <h4>Software Engineer</h4>
            <p>
              I am a Software Engineer, classically trained in
              object-oriented programming, who likes to write universal
              javascript, with extensive experience building the backend of
              web-connected properties.
              <br />
              <br /> I have a diverse set of skills writing in the serverside
              languages C#, PHP, Javascript, and the clientside languages HTML,
              Javascript, CSS, TypeScript, including the database languages
              mysql, MSSQL, and Mongodb. <br />
              <br />I currently work on WordPress applications using React and
              specialize in updating broken legacy applications to
              headles/ rendered/ restful/ progressive modern applications.
            </p>
            {!readMoreOpen && (
            <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
              <span className="btn-front">
                <span>Read More</span>
              </span>
            </button>
            )}
          </div>
        </div>
        {readMoreOpen && (
        <div className="about-info-2">
          <p>
          I am a writer; I write in human languages and in machine languages. I
          like writing poetry and short stories. I like writing blogs and
          reflecting upon my personal experience. I have written different blogs
          over the years trying to find out where my niche is. I have been
          building a universe for a novel that I want to write entirely in
          javascript. I have some odd ideas.
          <br />
          <br />
          I am a maker; I woodwork, weld metal, solder electronics, program
          microcontrollers, and I like to find projects that combines these
          skills. I have a desire to create kinetic water art installations.
          <br />
          <br />
          I'm an adventurer; I like to go biking, hiking, backpacking, and
          traveling to remote areas to connect with the natural world and I find
          those experiences to be invaluable. I like to believe that life
          happens in between the moments that you plan for, and I actively seek
          out adventures that will grow who I am as a person with those around
          me.
          <br />
          <br />
          I'm a contributor; I contribute to a range of projects in various
          capacities by writing open source code and submitting pull requests on
          GitHub, by being a member of cycling related non-profit organizations
          in the Pacific Northwest, by First Doing Nothing and providing peer
          support while participating in artful events both local and
          international.
          </p>
          {readMoreOpen && (
            <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
              <span className="btn-front">
                <span>Close</span>
              </span>
            </button>
            )}
        </div>
        )}
        <div className="about-skills">
          <div className="skills-wrapper">
            <div className="skill-thumbnail">
              <Image
                src="/html.svg"
                alt="html"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/css3.svg"
                alt="CSS3"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/javascript.svg"
                alt="javascript"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/ejs-logo.svg"
                alt="ejs-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/react.svg"
                alt="react"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/mongodb.svg"
                alt="mongodb"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/php-logo.png"
                alt="php-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/nodejs.svg"
                alt="nodejs"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/node-javascript.png"
                alt="node-javascript"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/liquidjs-logo.png"
                alt="liquidjs-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/ts-logo-round-256.svg"
                alt="ts-logo-round-256"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/coffeescript.svg"
                alt="coffeescript"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/mysql-logo.png"
                alt="mysql-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/redis-logo.png"
                alt="redis-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/dotnet-logo.png"
                alt="dotnet-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/mssql-logo.png"
                alt="mssql-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/git.svg"
                alt="git-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="skill-thumbnail">
              <Image
                src="/c-logo.png"
                alt="c-logo"
                width={15}
                height={15}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="about-timeline">
          <div className="about-flex">
            <div className="about-col">
              <TimeLineBox
                img={"/nerdery_logo.png"}
                title={`Nerdery`}
                position={`Senior Software Engineer`}
                fromTo={``}
                Desc={
                  <p>
                    I am employed as a full-time Senior Software Engineer with the Nerdery, remotely based out of Nevada. I contribute to architecture design, management, development, and more. While working at the Nerdery I have been assigned to large system projects for fortune 100 companies, implementing MonoRepos and DevOps solutions in addition to code features on full stack nodejs projects using Angular and VueJs.<br/><br />I have a passion for helping people with technology and software solutions, my goal is to help people do what they are already doing more efficiently. I like building entire applications for fun, but realize that a lot of people just need something quick and easy, so I'm open to short term projects as well as long term solutions.
                  </p>
                }
              />
            </div>
            <div className="about-col">
              <TimeLineBox
                img={"/Tag-Logo-Stacked-V2.svg"}
                title={`BikeTag.Org`}
                position={``}
                fromTo={`2018`}
                Desc={
                  <p>
                    BikeTag.Org is a project that I started with a friend back in 2018 after they approached me with an app idea. The idea was simple: create a tool to play the game of BikeTag easier than it was currently being played. So that year we launched a tool that uploaded two images (found it tag, new mystery location) and provided fields for credit and a hint for the next round. That project continues to evolve and we have successfully scaled the project to include 7 cities across the world including: Indianapolis, Indiana, Inverness, Scotland, and Vienna, Austria! I started this endeavor as an entirely open source project. You can see how that project is <a href="https://github.com/keneucker/biketag-website/projects">managed on GitHub, here.</a>
                  </p>
                }
              />
            </div>
            <div className="about-col">
              <TimeLineBox
                img={"/Burning_Mandala.png"}
                title={`Burning Man Project`}
                position={`Black Rock Ranger`}
                fromTo={`Aug 2019 - Present - 3 yrs 5mos`}
                Desc={
                  <p>
                    Arts and Culture<br/><br/>
                    I became a Black Rock Ranger in 2019 to be part of the peer support team for Burning Man Project events focusing on emergency response, harm reduction, and de-escalation, as well as empowerment and support, in Gerlach, Nevada, and worldwide. I began Rangering at Portland's Regional Burning Man event in 2016 -- an event in my own backyard. I moved to Gerlach, Nevada, to Ranger full-time in the area with both the Black Rock City Department of Public Works as well as Black Rock Desert Nevada Operations.<br/><br/>
                    As a Ranger, a participant, I walk around event spaces and engage with friends, some of whom I'm meeting for the first time, building upon a history of social capital for which participants can trust and depend on to be available for aid at any time.<br/><br/>
                    not a cop )'( not your mom
                  </p>
                }
              />
            </div>
            <div className="about-col">
              <TimeLineBox
                img={"/shift-logo.jpg"}
                title={`Shift2Bikes`}
                position={`Board Member, Committee Member of the Code of Conduct committee Board Member`}
                fromTo={`July 2018 - May 2021 - 2 yrs 11 mos`}
                Desc={
                  <p>
                   Arts and Culture<br/><br/>
                  Member on the board of directors of the shift2bikes organization. As a board and committee member, I assisted with the creation and implementation of the bylaws and Code of Conduct. Remotely, I mostly participate in board meetings and help with organizing on different committees.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
