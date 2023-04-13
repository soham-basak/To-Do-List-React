import React from "react";


const ItemList = (props) =>{


    return ( 
    <div className="todo_style">  
    <i className="fa fa-times" aria-hidden="true" 
    onClick={()=>{
        props.onSelect(props.id);
    }}
    />
    <li>{props.list}</li>
    </div>  

    );
};

export default ItemList;