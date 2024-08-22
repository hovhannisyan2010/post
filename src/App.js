import { useState } from 'react';
import './App.css';
function App() {
  const [name, setname] = useState("")
  const [apple, setapple] = useState("Fuje")
  const [num, setnum] = useState(0)
  const [check, setcheck] = useState(false)
  const [obj, setobj] = useState({
    name: "",
    apple: "",
    num: "",
    check: "",
  })
  return (
    <div className="App">
      <div>

        <h1>How About Them Apples</h1>
        <h3>You are submitting the following</h3>
        <div>
          <ul>
            <li>name:{obj.name}</li>
            <li>apples:{obj.apple}</li>
            <li>count:{obj.num}</li>
            <li>gift-wrap:{obj.check + ""}</li>
          </ul>
        </div>
      </div>
      <div className='name'>
        <label>name</label>
        <input onChange={(e) => setname(e.target.value)} />
      </div>
      <div className='inputs'>
        <label >Apples:</label>
        <select className='apple' onChange={(e) => setapple(e.target.value)}>
          <option>Fuje</option>
          <option>Japanes</option>
        </select>
        <label >Count:</label>
        <input className='num' type='number' onChange={(e) => setnum(e.target.value)} />
        <label >gift-wrap:</label>
        <input type='checkbox' onClick={() => setcheck(!check)} />
      </div>
      <input type='submit' className='submit' onClick={() => {
        setobj({
          name: name,
          apple: apple,
          num: num,
          check: check,
        })
      }} />
    </div>
  );
}

export default App;
