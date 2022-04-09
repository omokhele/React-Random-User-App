import './App.css';
import { fetchUser } from './services/rando_user'
import { useState, useEffect } from 'react'
import UserSummary from './components/UserSummary';

function App() {

const [random, setRandom] = useState([]);


  async function refreshUser() {
    let result = await fetchUser();
    // console.log('Howdy', result)
    setRandom(result.data.results)
    console.log('Hey', result.data.results)

//   fetchUser().then((res) => {
//     setRandom(res);
//     console.log('running...', res)
// })
// }

  }
  useEffect(() => {
    fetchUser()
    console.log('showing')
}, [])

  return (
    <div className="App">
      <header>
        <h1>Hello World</h1>
        <input type='button' value="Click" onClick={() => refreshUser()}></input>
      </header>
      <div>
        {
      (random || []).map((data, index) => {
      return <UserSummary data = {data} key = {index}/> 
        // <li>Name: {r.name.title} {r.name.first} {r.name.last}</li>
        // <li>Phone: {r.cell}</li>
        // <li>Age: {r.dob.age}</li>
        // <li>Date of Birth: {r.dob.date}</li>
        // <li>Email Address: {r.email}</li>
        
})
}
      {/* <ul>
          <li>{random.name}</li>
        </ul> */}
      </div>
    </div>
  );
}

export default App;


