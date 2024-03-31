import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Job Seekers And Employers",
    description:
      "This is an application for Job Seekers and Employers, where Employer can come to post there jobs and Job Seekers can come to build their resumes and Apply to these Jobs.",
    image: "/First.png",
    github: "https://github.com/syedhassanhafeez/jobee-com-app",
    link: "https://myproject-f93de.web.app/",
  },
  {
    name: "Meat King",
    description: "Restaurant Theme based",
    image: "/Third.png",
    github: "https://github.com/syedhassanhafeez/E-commerceSite",
    link: "https://e-commerceproject-86879.web.app/",
  },
  {
    name: "Static Website",
    description:
      "We're going to build a fully functional eCommerce application using ReactJs, NodeJs, MongoDb. While building it you're going to learn many advanced ReactJs, NodeJs topics, as well as how to use Stripe for card transactions. On top of that, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: "/Second.png",
    github: "https://github.com/syedhassanhafeez/fyp-ecommerce",
    link: "https://assignment2-827f4.web.app/",
  },
  {
    name: "Student Registration Form",
    description: "A professionally crafted student registration form is a crucial tool for efficiently managing enrollment processes.",
    image: "/Fourth.png",
    github: "https://github.com/syedhassanhafeez/saylaniproject",
    link: "https://hassanassignment.web.app/",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
