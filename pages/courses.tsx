// pages/courses.tsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db, storage, auth } from "../lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

export default function Courses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [userRole, setUserRole] = useState<string | null>(null);

  // Fetch courses from Firestore
  const fetchCourses = async () => {
    const q = query(collection(db, "courses"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    setCourses(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchCourses();

    // Detect current user and role
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch role from Firestore 'users' collection
        const fetchRole = async () => {
          const userDoc = await getDocs(
            collection(db, "users")
          );
          const userData = userDoc.docs
            .map((d) => d.data())
            .find((u: any) => u.email === user.email);
          setUserRole(userData?.role || "student");
        };
        fetchRole();
      } else {
        setUserRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle PDF upload
  const handleUpload = async () => {
    if (!file || !title) return;

    const storageRef = ref(storage, `pdfs/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db, "courses"), {
      title,
      url,
      createdAt: serverTimestamp(),
    });

    alert("PDF uploaded successfully!");
    setFile(null);
    setTitle("");
    fetchCourses(); // Refresh list
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f15] to-[#0a0a1f] text-white">
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#00ffea] text-center">
          Courses
        </h1>

        {/* Moderator PDF Upload */}
        {userRole === "moderator" && (
          <div className="mb-12 p-4 bg-[#111118] rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[#ff5555]">
              Upload New PDF
            </h2>
            <input
              type="text"
              placeholder="Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 mb-2 w-full rounded text-black"
            />
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mb-2"
            />
            <button
              onClick={handleUpload}
              className="bg-[#00ffea] text-[#0f0f15] px-6 py-2 rounded font-semibold hover:bg-[#00d8c4] transition"
            >
              Upload PDF
            </button>
          </div>
        )}

        {/* List of Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-4 bg-[#11111a] rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
              <a
                href={course.url}
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
