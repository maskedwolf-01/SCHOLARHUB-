// pages/courses.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Courses() {
  const courseList = [
    {
      title: "Introduction to Programming",
      pdf: "https://www.cs.cmu.edu/~112/notes/notes1.pdf",
    },
    {
      title: "Data Structures",
      pdf: "https://www.geeksforgeeks.org/data-structures/",
    },
    {
      title: "Database Systems",
      pdf: "https://www.tutorialspoint.com/dbms/dbms_tutorial.pdf",
    },
    {
      title: "Discrete Mathematics",
      pdf: "https://people.cs.pitt.edu/~micheli/DiscreteMathematics.pdf",
    },
    {
      title: "Operating Systems",
      pdf: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
    },
    {
      title: "Computer Networks",
      pdf: "https://www.tutorialspoint.com/computer_network/computer_network_tutorial.pdf",
    },
    {
      title: "Software Engineering",
      pdf: "https://www.tutorialspoint.com/software_engineering/software_engineering_tutorial.pdf",
    },
    {
      title: "Artificial Intelligence",
      pdf: "https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_tutorial.pdf",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 neon-text text-center">
          Courses
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Here are some computing courses and resources.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseList.map((course, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
              <a
                href={course.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ffea] hover:underline"
              >
                View PDF
              </a>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
