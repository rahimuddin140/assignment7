import { Link } from "react-router";

export default function Home({ doctors }) {
  const totalDoctors = doctors.length;
  const availableToday = doctors.filter(d => d.isAvailableToday && d.availableSlots > 0).length;
  const bookedAppointments = doctors.filter(d => d.isBooked).length;

  return (
    <div className="container">
      <h1>Doctor Appointment Portal</h1>
      <p>Find trusted doctors and book appointments easily.</p>
      <div className="stats">
        <div className="card"><h3>Total Doctors</h3><p>{totalDoctors}</p></div>
        <div className="card"><h3>Doctors Available Today</h3><p>{availableToday}</p></div>
        <div className="card"><h3>Booked Appointments</h3><p>{bookedAppointments}</p></div>
      </div>
      <Link to="/doctors" className="btn">Browse Doctors</Link>
    </div>
  );
}
