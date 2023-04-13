import React, { useState } from 'react'
import "./App.css";
import ItemList from "./components/ItemList"

const App = () =>{

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);


  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");
  };
  
  const delItem = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) =>{
        return index !== id;
      });
    });
  };

  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> To Do List </h1>
        <br />
        <input type="text" placeholder="Add a Item" 
        value={inputList}
        onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>

        <ol>
          
          {items.map( (itemValue, index)  =>{
            return <ItemList 
            key={index}
            id={index}
            list={itemValue}
            onSelect={delItem}
            />
          })}

        </ol>       
      </div>
    </div>
    </>
  );
};

export default App;
