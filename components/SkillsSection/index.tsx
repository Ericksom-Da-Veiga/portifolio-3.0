import { Layers, Code, BookOpen } from "lucide-react";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className=" translate-x-0 max-w-sm md:max-w-3xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-8 sm:px-16 md:px-24 py-16 -mt-44 z-10 bg-white rounded-3xl shadow-xl"
    >
      <h2 className="text-title-lg font-title font-extrabold mb-10 text-center">
        Habilidades
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container font-body ">
        {/* Backend Column */}
        <div className="flex flex-col items-center text-center border-b-2 md:border-b-0 md:border-r-2">
          <div className="w-20 h-20 rounded-full bg-blue flex items-center justify-center mb-4">
            <Code className="w-10 h-10 text-green" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Backend</h2>
          {/* <p className="mb-8">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p> */}

          <div className="w-full">
            {/* <h3 className="text-blue font-medium mb-2 ">Linguagens usadas</h3>
            <p className="mb-6">Java, PHP</p> */}

            {/* <h3 className="text-blue font-medium mb-2">Tecnologias:</h3> */}
            <ul className="pr-8">
              {[
                { name: "Java", level: 90 },
                { name: "Spring Boot", level: 85 },
                { name: "Node.js", level: 50 },
                { name: "Laravel", level: 60 },
                { name: "PHP", level: 50 },
              ].map((skill, index) => (
                <li className="mb-2" key={index}>
                  {skill.name}
                  <div className="w-auto h-3 bg-gray-200 rounded-full mt-1">
                    <div
                      className="h-full bg-black rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Frontend Developer Column */}
        <div className="flex flex-col items-center text-center border-b-2 md:border-b-0 md:border-r-2">
          <div className="w-20 h-20 rounded-full bg-blue flex items-center justify-center mb-4">
            <Layers className="w-10 h-10 text-green" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Frontend</h2>
          {/* <p className="mb-8">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p> */}

          <div className="w-full">
            {/* <h3 className="text-purple-600 font-medium mb-2">
              Languages I speak:
            </h3> */}
            {/* <p className="mb-6">HTML, Pug, Slim, CSS, Sass, Git</p> */}
            {/* (            <h3 className="text-purple-600 font-medium mb-2">Dev Tools:</h3> */}

            <ul className="pr-8">
              {[
                { name: "HTML", level: 100 },
                { name: "CSS", level: 90 },
                { name: "JavaScript", level: 80 },
                { name: "TypeScript", level: 70 },
                { name: "Tailwind CSS", level: 80 },
                { name: "React", level: 70 },
                { name: "NextJs", level: 80 },
                { name: "Angular", level: 70 },
                { name: "Bootstrap", level: 100 },
              ].map((skill, index) => (
                <li className="mb-2" key={index}>
                  {skill.name}
                  <div className="w-auto h-3 bg-gray-light rounded-full mt-1">
                    <div
                      className="bg-black  h-full rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Others Column */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-blue flex items-center justify-center mb-4">
            <BookOpen className="w-10 h-10 text-green" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Outras Linguagens e tecnologias
          </h2>
          {/* <p className="mb-8">
            I genuinely care about people, and enjoy helping them work on their
            craft.
          </p> */}

          <div className="w-full">
            {/* <h3 className="text-purple-600 font-medium mb-2">
              Experiences I draw from:
            </h3>
            <p className="mb-6">UX/UI, Product design, Freelancing</p>

            <h3 className="text-purple-600 font-medium mb-2">Mentor Stats:</h3> */}
            <ul className="">
              {[
                { name: "Git/GitHub", level: 100 },
                { name: "SQL", level: 100 },
                { name: "MYSQL", level: 100 },
                { name: "Oracle e PL/SQL", level: 100 },
                { name: "Python", level: 60 },
                { name: "Docker", level: 50 },
              ].map((skill, index) => (
                <li className="mb-2" key={index}>
                  {skill.name}
                  <div className="w-auto h-3 bg-gray-light rounded-full mt-1">
                    <div
                      className="bg-black  h-full rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
