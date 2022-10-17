import './App.css';
import {Button} from 'react-bootstrap';
import Gallery from './Gallery';
import { useEffect, useState } from 'react';

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(handleClick, []);

  function handleClick(){
    //call API
    fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((data) => {
      let imageUrls = data.data.memes.map((item) => item.url);

      //random and set state
      imageUrls = imageUrls.sort(() => Math.random() - 0.5);
      setImageUrls(imageUrls);
    });

  }

  return (
    <div className="App">
      <Button variant={"primary"} onClick={handleClick}>Call API and mix</Button>
      <Gallery imageUrls={imageUrls}/>
    </div>
  );
}

export default App;
