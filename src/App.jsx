import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { users, attendance } from './Database/data';

function App() {
  // document.getElementById('date_input').valueAsDate = new Date();

  return (
    <div className="container">
      <h1 className="h4 bg-primary mt-3 rounded p-2 text-white text-center">O'quvchilar yo'qlamasi</h1>

      <div className="d-flex mt-4 justify-content-center flex-column align-items-center">
        <p className='text-muted'>Kerakli vaqtni tanlang</p>
        <input className="form-control w-25" type="date" />
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
          {attendance.map(a => {
            return (
              <tr key={a.id}>
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
          })}
        </tbody>
      </table>
    </div> // End of container
  );
}

export default App;
