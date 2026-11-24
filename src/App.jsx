import { useState } from "react";
import { Routes, Route } from "react-router";
import { doctorsData } from "./data/doctors.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import DoctorDetails from "./pages/DoctorDetails.jsx";
import Appointments from "./pages/Appointments.jsx";
import "./App.css";

export default function App() {
  const [doctors, setDoctors] = useState(doctorsData);
  const bookedCount = doctors.filter(d => d.isBooked).length;

  function bookDoctor(id) {
    setDoctors(doctors.map(doc =>
      doc.id === id ? { ...doc, isBooked: true, availableSlots: doc.availableSlots - 1 } : doc
    ));
  }

  function cancelDoctor(id) {
    setDoctors(doctors.map(doc =>
      doc.id === id ? { ...doc, isBooked: false, availableSlots: doc.availableSlots + 1 } : doc
    ));
  }

  return (
    <>
      <Navbar bookedCount={bookedCount} />
      <Routes>
        <Route path="/" element={<Home doctors={doctors} />} />
        <Route path="/doctors" element={<Doctors doctors={doctors} onBook={bookDoctor} onCancel={cancelDoctor} />} />
        <Route path="/doctors/:id" element={<DoctorDetails doctors={doctors} onBook={bookDoctor} onCancel={cancelDoctor} />} />
        <Route path="/appointments" element={<Appointments doctors={doctors} onCancel={cancelDoctor} />} />
      </Routes>
    </>
  );
}
