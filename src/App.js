import { useState } from 'react';
import './App.css';
function App() {
  const [obj, setObj] = useState({
    name: "",
    apple: "",
    num: "",
    check: "",
  })
  function hendleSubmit(event) {
    event.preventDefault()
    setObj({
      name: event.target.name.value,
      apple: event.target.select.value,
      num: event.target.num.value,
      check: event.target.checkbox.checked
    })
  }
  return (
    <form className="App" onSubmit={hendleSubmit}>
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
        <input name='name' />
      </div>
      <div className='inputs'>
        <label >Apples:</label>
        <select className='apple' name='select'>
          <option>Fuje</option>
          <option>Japanes</option>
        </select>
        <label >Count:</label>
        <input className='num' name='num' type='number' />
        <label >gift-wrap:</label>
        <input type='checkbox' name='checkbox'/>
      </div>
      <button type='submit' className='submit'>submit</button>
    </form>
  );
}

export default App;
