import React, {useState} from "react";


function Toggle() {

    let [isOn, setIsOn] = useState(false);
    console.log(isOn)
    
    function onHandler () {
    setIsOn(isOn = !isOn)

    }
    
    const clr = isOn ? "red" : "white";

    return(
        <button onClick={onHandler} style={{background : clr}} > {isOn ? "ON" : "OFF"}  </button>

        );}

export default Toggle;
