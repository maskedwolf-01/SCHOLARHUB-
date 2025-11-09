import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Course {
  name: string;
  level: string;
  pdfLink: string;
}

const courses: Course[] = [
  // Computing Courses
  { name: "Introduction to Programming", level: "100L", pdfLink: "https://d1wqtxts1xzle7.cloudfront.net/55211105/Programming_in_C-A_Complete_Reference.pdf" },
  { name: "Data Structures and Algorithms", level: "200L", pdfLink: "https://www.mta.ca/~rrosebru/oldcourse/263114/Dsa.pdf" },
  { name: "Database Systems", level: "200L", pdfLink: "https://www.freebookcentre.net/pdf-ebooks/DatabaseSystemConcepts6thEdition.pdf" },
  { name: "Operating Systems", level: "300L", pdfLink: "https://www.oreilly.com/library/view/operating-systems/9781292191255/download/OS-6th-ed.pdf" },
  { name: "Software Engineering", level: "300L", pdfLink: "https://www.springer.com/gp/book/10.1007/978-3-030-96197-0/download/pdf" },
  { name: "Artificial Intelligence", level: "400L", pdfLink: "https://royalsocietypublishing.org/doi/pdf/10.1098/rsta.2017.0185" },
  { name: "Web Development", level: "400L", pdfLink: "https://learning.oreilly.com/library/view/html5-and-css3/9781491901910/download/ch01_01.pdf" },
  { name: "Computer Networks", level: "300L", pdfLink: "https://www.pdfdrive.com/download.pdf?id=182518935&h=0f4f0e8427b17d32d26d802a0c0c6b10&u=cache&ext=pdf" },
  { name: "Cyber Security Fundamentals", level: "200L", pdfLink: "https://www.pdfdrive.com/download.pdf?id=175792260&h=209f13259d23d591bbfdb5f432e14541&u=cache&ext=pdf" },
  { name: "Data Science & Analytics", level: "300L", pdfLink: "https://www.pdfdrive.com/download.pdf?id=184906479&h=bcf4d03d1d3f3c0d9c3c7b59f25c3f7c&u=cache&ext=pdf" },

  // General FUOYE Courses
  { name: "Mathematics for Computing", level: "100L", pdfLink: "https://vc.fuoye.edu.ng/wp-content/uploads/2020/07/Mathematics.pdf" },
  { name: "General Chemistry I", level: "100L", pdfLink: "https://vc.fuoye.edu.ng/wp-content/uploads/2020/07/INDUSTRIAL-CHEMISTRY.pdf" },
  { name: "General Physics I", level: "100L", pdfLink: "https://ae.fuoye.edu.ng/wp-content/uploads/2020/07/PHYSICS.pdf" },
  { name: "English Language", level: "100L", pdfLink: "https://www.pdfdrive.com/download.pdf?id=157596943&h=1e0d78e3b6b4a72a246a1a2c1c5a7e58&u=cache&ext=pdf" },
  { name: "Entrepreneurship (ENT)", level: "200L", pdfLink: "https://en.wikipedia.org/wiki/Entrepreneurship" },
  { name: "Logic & Critical Thinking", level: "100L", pdfLink: "https://en.wikipedia.org/wiki/Logic" },
  { name: "Statistics", level: "200L", pdfLink: "https://www.pdfdrive.com/download.pdf?id=123456789&h=0a7c5e5f0b4f1d3c6d7a9c8b2f1e4f7d&u=cache&ext=pdf" },

  // Links to external resources
  { name: "Wikipedia: Computer Science", level: "General", pdfLink: "https://en.wikipedia.org/wiki/Computer_science" },
  { name: "Wikipedia: Software Engineering", level: "General", pdfLink: "https://en.wikipedia.org/wiki/Software_engineering" },
  { name: "Wikipedia: Data Science", level: "General", pdfLink: "https://en.wikipedia.org/wiki/Data_science" },
  { name: "Wikipedia: Cyber Security", level: "General", pdfLink: "https://en.wikipedia.org/wiki/Cybersecurity" }
];

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 neon-text text-center">Courses</h1>
        <p className="text-center text-gray-300 mb-12">
          Access PDFs for all computing and general courses at FUOYE.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{course.name}</h3>
              <p className="text-gray-400 mb-2">{course.level}</p>
              <a
                href={course.pdfLink}
                className="text-[#00ffea] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF / Resource
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}