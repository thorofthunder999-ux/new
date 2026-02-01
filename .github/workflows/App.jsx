export default function App() {
  const student = {
    name: "k.divyesh",
    regNo: "24CS1001",
    dept: "CSE",
    year: "II Year",
    email: "2500031074@klu.edu.in",
    cgpa: "8.5",
  };

  return (
    <div className="page">
      <h1 className="title">Student Information (Internal CSS)</h1>

      <div className="card">
        <div className="badge">TOPPER</div>

        <h2 className="name">{student.name}</h2>
        <p className="sub">
          Reg No: <b>{student.regNo}</b>
        </p>

        <div className="grid">
          <div className="box">
            <p className="label">Department</p>
            <p className="value">{student.dept}</p>
          </div>
          <div className="box">
            <p className="label">Year</p>
            <p className="value">{student.year}</p>
          </div>
          <div className="box">
            <p className="label">Email</p>
            <p className="value">{student.email}</p>
          </div>
          <div className="box">
            <p className="label">CGPA</p>
            <p className="value">{student.cgpa}</p>
          </div>
        </div>

        <button className="btn">View Profile</button>
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .page{
          min-height:100vh;
          padding:30px;
          font-family:Arial, sans-serif;
          background: linear-gradient(135deg,#f3e5f5,#e3f2fd);
        }
        .title{
          text-align:center;
          margin-bottom:20px;
          color:#222;
        }
        .card{
          width:420px;
          margin:0 auto;
          background:white;
          border-radius:18px;
          padding:22px;
          box-shadow:0 10px 25px rgba(0,0,0,0.12);
          position:relative;
          border:2px solid #eee;
        }
        .badge{
          position:absolute;
          top:18px;
          right:18px;
          background:#ff6f00;
          color:white;
          font-size:12px;
          font-weight:bold;
          padding:6px 10px;
          border-radius:999px;
        }
        .name{ margin:10px 0 4px; color:#4a148c; }
        .sub{ margin:0 0 14px; color:#555; }

        .grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
        }
        .box{
          padding:12px;
          border-radius:12px;
          background:#fff8e1;
          border:1px solid #ffe0b2;
        }
        .label{ margin:0; font-size:12px; color:#6b6b6b; }
        .value{ margin:6px 0 0; font-weight:bold; color:#1f1f1f; }

        .btn{
          width:100%;
          margin-top:16px;
          padding:12px;
          border:none;
          border-radius:12px;
          font-weight:bold;
          color:white;
          background: linear-gradient(90deg,#d81b60,#1e88e5);
          cursor:pointer;
        }
      `}</style>
    </div>
  );
}