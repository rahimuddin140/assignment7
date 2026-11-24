export default function Appointments({ doctors, onCancel }) {
  const bookedDoctors = doctors.filter(d => d.isBooked);
  const totalFee = bookedDoctors.reduce((sum, d) => sum + d.fee, 0);

  if (bookedDoctors.length === 0) {
    return <div className="container"><p>No appointments booked</p></div>;
  }

  return (
    <div className="container">
      <h1>Appointments</h1>
      <h3>Total Consultation Fee: ₹{totalFee}</h3>
      <div className="grid">
        {bookedDoctors.map(doc =>
          <div className="card" key={doc.id}>
            <h3>{doc.name}</h3>
            <p>{doc.specialization}</p>
            <p>{doc.hospital}</p>
            <p>₹{doc.fee}</p>
            <button className="btn btn-cancel" onClick={() => onCancel(doc.id)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}
