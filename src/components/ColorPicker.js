import { React, useState } from "react";

export default function ColorPicker(props) {
    const [pickedColor, setPickedColor] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div style={{padding : "110px" , textAlign: "center"}}>
            <div style={{ backgroundColor: pickedColor , height : "550px", border: "3px solid black", borderRadius:"30px"}}>
            <h1 style={{marginTop : "20px" , marginBottom : "150px", paddingTop : "30px"}}>Colour Picker</h1>
                <div style={isVisible?{display: "flex"}: {visibility:"hidden", display: "flex" ,justifyContent: "space-between"}}>
                    {props.colors.map((color, i) => {
                        return <div key={i} style={{ background: color, width: 60, height: 60 }} onClick={() => { setPickedColor(color) }}></div>;
                    })}
                </div>
                <button style={{marginTop: "40px" , marginBottom: "50px", padding:"10px" , fontSize:"20px" , border:"1px solid black", borderRadius:"10px", background:"lightblue" , fontWeight:"bolder"}} onClick={() => { setIsVisible(!isVisible) }}>Choose!</button>
            </div>
        </div>
    );
}