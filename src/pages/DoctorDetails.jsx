import { Link, useParams } from "react-router";

export default function DoctorDetails({ doctors, onBook, onCancel }) {
  const { id } = useParams();
  const doctor = doctors.find(d => String(d.id) === id);

  if (!doctor) {
    return (
      <div className="container">
        <p>Doctor not found</p>
        <Link to="/doctors">Back to Doctors</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card details">
        <h1>{doctor.name}</h1>
        <div className="badges">
          {doctor.isAvailableToday && doctor.availableSlots > 0
            ? <span className="badge badge-green">Available Today</span>
            : <span className="badge badge-red">Not Available</span>}
          {doctor.experience >= 10 && <span className="badge badge-gold">Senior Doctor</span>}
        </div>
        <p>Specialization: {doctor.specialization}</p>
        <p>Hospital: {doctor.hospital}</p>
        <p>Experience: {doctor.experience} years</p>
        <p>Fee: ₹{doctor.fee}</p>
        <p>Rating: {doctor.rating} / 5</p>
        <p>Available Slots: {doctor.availableSlots}</p>
        {doctor.isBooked
          ? <button className="btn btn-cancel" onClick={() => onCancel(doctor.id)}>Cancel</button>
          : !doctor.isAvailableToday
            ? <p className="status-text">Not Available Today</p>
            : doctor.availableSlots === 0
              ? <p className="status-text">No Slots Left</p>
              : <button className="btn" onClick={() => onBook(doctor.id)}>Book Appointment</button>}
      </div>
      <Link to="/doctors">← Back to Doctors</Link>
    </div>
  );
}
