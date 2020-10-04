import React, { useState } from 'react';
import './app.css'

function App() {
  const [list] = useState(
    [
      'Sri lanka',
      'India',
      'Germany',
      'Finland',
      'Australia',
      'Parkistan'
    ]
  );

  const [newList, setnewList] = useState([
    ...list
  ]);

  const search = (e) => {
    const data = list.filter(value =>
      value.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setnewList(data)

  }


  return (
    <div>
      <center>
        <h1>List searching</h1>
      </center>

      <div className="container">
        <div className="input-group input-group-sm mb-3">
        </div>
        <div class="input-group mb-3">
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={search} />
        </div>
      </div>
      <ul>
        {
          newList.map(item => {
            return <li className='list-item'>
              <div className="alert alert-success" role="alert">
                {item}
              </div>
            </li>
          })
        }
      </ul>




    </div>
  );
}

export default App;
