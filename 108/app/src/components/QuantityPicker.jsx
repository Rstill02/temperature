import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        let newVal = quantity + 1;
        setQuantity(newVal);
    }
    
    function decrease() {
        let newVal = quantity - 1;
        if (newVal > 0) {
        setQuantity(newVal);
    }
}

    return (
        <div className="qt-picker">
            <button onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;