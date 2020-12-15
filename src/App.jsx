import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { users, attendance } from './Database/data';

function App() {
  const [tableAttendance, setTable] = useState([...attendance]);

  const renderTable = (array) => {
    return array.map(a => {
      return (
        <tr key={a.id} className={a.visit ? 'bg-success text-white' : 'bg-danger text-white'}>
          <td>{a.id}</td>
          <td>{
            users.map(u => {
              if (a.userId === u.id) {
                return u.username;
              }
            })
          }</td>
          <td>{a.visitDate}</td>
          <td>{a.score}</td>
        </tr>
      );
    });
  };

  const getCurrentDate = (e) => {
    const filterByDate = attendance.filter(a => {
      return a.visitDate === e.target.value;
    });

    setTable([...filterByDate]);
  };

  return (
    <div className="container">
      <h1 className="h4 bg-primary mt-3 rounded p-2 text-white text-center">O'quvchilar yo'qlamasi</h1>

      <div className="d-flex mt-4 justify-content-center flex-column align-items-center">
        <p className='text-muted'>Kerakli vaqtni tanlang</p>
        <input className="form-control w-25 text-center" onChange={getCurrentDate} type="date" />
      </div>

      <table className='table table-bordered mt-3 table-striped table-hover'>
        <thead className='font-weight-bold bg-dark text-white'>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Visit Date</td>
            <td>Score</td>
          </tr>
        </thead>

        <tbody>
          {renderTable(tableAttendance)}
        </tbody>
      </table>
    </div> // End of container
  );
}

export default App;
