import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  // document.getElementById('date_input').valueAsDate = new Date();

  return (
    <div className="container">
      <h1 className="h4 bg-primary mt-3 rounded p-2 text-white text-center">O'quvchilar yo'qlamasi</h1>

      <div className="d-flex mt-4 justify-content-center flex-column align-items-center">
        <p className='text-muted'>Kerakli vaqtni tanlang</p>
        <input className="form-control w-25" type="date" />
      </div>

      <table className='table table-bordered mt-3 table-striped'>
        <thead className='font-weight-bold bg-dark text-white'>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Visit Date</td>
            <td>Score</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Abbos</td>
            <td>2020-12-12</td>
            <td>55</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Valijon</td>
            <td>2020-12-12</td>
            <td>25</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nozima</td>
            <td>2020-12-12</td>
            <td>33</td>
          </tr>
        </tbody>
      </table>
    </div> // End of container
  );
}

export default App;
