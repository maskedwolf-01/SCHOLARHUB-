// pages/courses.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Courses() {
  const courseList = [
    {
      title: "Introduction to Programming",
      pdf: "https://www.tutorialspoint.com/computer_programming/computer_programming_tutorial.pdf",
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
      title: "Mathematics for Computing",
      pdf: "https://people.math.sc.edu/Burkardt/data/pdf/mathematics.pdf",
    },
    {
      title: "Physics for Computing",
      pdf: "https://www.physicsclassroom.com/",
    },
    {
      title: "Computer Networks",
      pdf: "https://www.geeksforgeeks.org/computer-network-tutorials/",
    },
    {
      title: "Software Engineering",
      pdf: "https://www.tutorialspoint.com/software_engineering/index.htm",
    },
    {
      title: "Cyber Security",
      pdf: "https://www.cybrary.it/course/cyber-security-for-beginners/",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 neon-text text-center">
          Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseList.map((course) => (
            <div
              key={course.title}
              className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
              <a
                href={course.pdf}
                target="_blank"
                className="text-[#00ffea] hover:underline"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
      }
