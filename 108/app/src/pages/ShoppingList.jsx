import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
    const [list, setList] = useState(["Test 1", "Test 2", "Test 3"]);

    function addItem() {
        console.log("adding");
        
        /**
         * create a copy
         * modify your copy
         * set the copy
         */
        let copy  = [...list];
        copy.push("NEW");
        setList(copy);
    }

    return (
        <div className="shopping-list page">
            <h3>Shopping List</h3>

            <div className="box">
                <input type="text" />
                <button onClick={addItem} className="btn btn-sm btn-success">Add</button>
            </div>

            <ul>
                {list.map( x => <li>{x}</li>)}
            </ul>
        </div>
    );
}

export default ShoppingList;


/**
 * when they vlivk the button
 * call a func (addItem)
 * the function should console log a message
 * 
 */


