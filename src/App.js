import './App.css';
import List from "./Components/List";
import Details from "./Components/Details";
import {useState} from "react";

function App() {

  const [id, setID] = useState('0');

  function UserOnClick(element) {
    setID(element.currentTarget.dataset.id)
  }

  return (
    <div className='listContent'>
      <List Func={UserOnClick}/>
      <Details id={id}/>
    </div>
  );
}

export default App;
