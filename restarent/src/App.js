// import data from "./data.json";
import './App.css';
import RestarentDetails from "./RestarentDetails/RestarentDetails";
import { useEffect } from "react";
import axios from "axios"
import { useState } from 'react';
function App() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [sort, setsort] = useState("");

  const fetchData = () => {

    if (!sort) {
      axios.get(`http://localhost:3003/food?_page=${page}&_limit=5`)
        .then((res) => setdata(res.data))
        .catch((err) => console.log(err));

    } else {
      axios.get(`http://localhost:3003/food?_page=${page}&_limit=5&_sort=costForTwo&_order=${sort}`)
        .then((res) => setdata(res.data))
        .catch((err) => console.log(err));

    }


  }

  useEffect(() => {
    fetchData();
  }, [page, sort])


  return (
    <div className="App">
      <h1>Restarent</h1>

      <div className='buttondisplay'>

      {/* FOR PAGINATION */}

      <div>
        <button disabled={page === 1} onClick={() => setpage(page - 1)}>prev</button>
        <button>{page}</button>
        <button disabled={page == 4} onClick={() => setpage(page + 1)}>Next</button>
      </div>

      {/* FOR SORTING */}

      <div>
        <button className='asc' onClick={() => setsort("asc")}>Low To High</button>
        <button className='des' onClick={() => setsort("desc")}>High To Low</button>
        <button className='nosort' onClick={() => setsort("")}>Don't sort</button>
      </div>

      {/* SORT WITH STARS */}
      <div>

      <button >4Star Above</button>
      <button>3Star Above</button>
      <button>2Star Above</button>
      <button>1Star Above</button>
      </div>

      {/* SORT WITH PAYMENT METHODS */}

      

</div>
      {/* SENDING THE DATA TO DISPLAY */}

      {
        data.map((item) => (
          <RestarentDetails key={item.id} data={item} />
        ))
      }

    </div>
  );
}

export default App;
