import { Link } from "react-router";

export default function DoctorCard({ doctor, onBook, onCancel }) {
  return (
    <div className="card">
      <h3><Link to={`/doctors/${doctor.id}`}>{doctor.name}</Link></h3>
      <div className="badges">
        {doctor.isAvailableToday && doctor.availableSlots > 0
          ? <span className="badge badge-green">Available Today</span>
          : <span className="badge badge-red">Not Available</span>}
        {doctor.experience >= 10 && <span className="badge badge-gold">Senior Doctor</span>}
      </div>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience} yrs exp</p>
      <p>₹{doctor.fee}</p>
      <p>⭐ {doctor.rating}</p>
      {doctor.isBooked
        ? <button className="btn btn-cancel" onClick={() => onCancel(doctor.id)}>Cancel</button>
        : !doctor.isAvailableToday
          ? <p className="status-text">Not Available Today</p>
          : doctor.availableSlots === 0
            ? <p className="status-text">No Slots Left</p>
            : <button className="btn" onClick={() => onBook(doctor.id)}>Book Appointment</button>}
    </div>
  );
}
