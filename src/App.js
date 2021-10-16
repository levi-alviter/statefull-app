import React, {useState} from 'react';
import './App.css';

function App() {
  let myStorage =  localStorage;
  const [name,setName] = useState(()=>{
    return myStorage.getItem('name');
  });
  
  function saveName(e){
    const newName = e.target.value;
    setName(newName);
    myStorage.setItem('name',newName);
  }
  return (
    <section className="App">
      <h1>Welcome to my fullstate page</h1>
      <form className="form">
        <div className="form-group">
          <input 
            className="form__input" 
            value={name} 
            type="text" 
            id="inputName" 
            onChange={saveName}
            placeHolder=" "/>
          <label className="form__label" htmlFor="inputName">Name</label>
          <span className="form__line"></span>
        </div>
      </form>
      {name?  <p className="nameDisplay">{`Hello ${name}!!`}</p>:null}
    </section>
  );
}

export default App;
