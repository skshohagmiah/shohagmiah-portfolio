import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">Shohag Miah</h1>
          <p className="text-xl text-gray-400">Computer Programmer | Web Developer | DSA Enthusiast</p>
        </header>

        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            With 2 years of experience in web development, I specialize in creating responsive and user-friendly
            applications. My passion for Data Structures and Algorithms drives me to continuously improve my
            problem-solving skills.
          </p>
          <div className="flex justify-center space-x-4 text-black">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Git", "RESTful APIs", "Data Structures", "Algorithms"].map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
              <p className="text-gray-400 mb-2">TechCorp Inc. | 2021 - Present</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Developed and maintained client websites using React and Node.js</li>
                <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                <li>Collaborated with the design team to create intuitive user interfaces</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Junior Developer</h3>
              <p className="text-gray-400 mb-2">StartUp Solutions | 2020 - 2021</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Assisted in the development of a customer management system</li>
                <li>Gained experience in agile development methodologies</li>
                <li>Participated in code reviews and improved coding practices</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-400 mb-2">University of Technology | 2016 - 2020</p>
              <p className="text-gray-300">Relevant coursework: Data Structures, Algorithms, Web Development, Database Management</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-lg mb-4">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <Button className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" /> Get In Touch
          </Button>
        </section>
      </div>
    </div>
  )
}