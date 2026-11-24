import { useState } from "react";
import DoctorCard from "../components/DoctorCard.jsx";

export default function Doctors({ doctors, onBook, onCancel }) {
  const [search, setSearch] = useState("");
  const [spec, setSpec] = useState("All");
  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) &&
    (spec === "All" || doc.specialization === spec)
  );

  return (
    <div className="container">
      <h1>Doctors</h1>
      <div className="filters">
        <input placeholder="Search doctor by name..." value={search} onChange={e => setSearch(e.target.value)} />
        <select value={spec} onChange={e => setSpec(e.target.value)}>
          <option>All</option>
          <option>Cardiologist</option>
          <option>Dermatologist</option>
          <option>Orthopedic</option>
          <option>Pediatrician</option>
          <option>Dentist</option>
        </select>
      </div>
      {filteredDoctors.length === 0
        ? <p>No doctors found</p>
        : <div className="grid">
            {filteredDoctors.map(doc =>
              <DoctorCard key={doc.id} doctor={doc} onBook={onBook} onCancel={onCancel} />
            )}
          </div>}
    </div>
  );
}
