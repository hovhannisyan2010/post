import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
function App() {
  const [photos,setPhotos] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(res => setPhotos(res))
  },[])
  return (
    <div className='App'>
      <Header/>
      <div className='parent'>
      {
        photos.map((e,i)=>{
          if (i<20) {
            return <Card title={e.title} img={e.url} key={e.id}/>
          }
        })
      }
      </div>
    </div>
  );
}

export default App;
