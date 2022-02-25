import React, { useState, useEffect } from "react";
import axios from "axios";
const Bored = () => {
    
    axios.get(`https://www.boredapi.com/api/activity`).then( (res) => {
                console.log(res.data.activity);
                document.getElementById("productActivity").textContent = `Activity : ${res.data.activity}`           
                document.getElementById("productType").textContent = `Type: ${res.data.type}`           
                document.getElementById("productParticipants").textContent = `Participants: ${res.data.participants}$`    
                document.getElementById("productPrice").textContent = `Price: ${res.data.price}`    
                document.getElementById("productLink").textContent = `Link: ${res.data.link}`
                document.getElementById("productKey").textContent = `Key: ${res.data.key}`
                document.getElementById("productAccessibility").textContent = `Accessbility: ${res.data.accessibility}`
    }) 
    return (
        <div >
            <div>
                <h1>Bored App</h1> 
            </div>
            <div className="Bored">
                <p id="productActivity"></p>
                <p id="productType"></p>
                <p id="productParticipants"></p>
                <p id="productPrice"></p>
                <p id="productLink"></p>
                <p id="productKey"></p>
                <p id="productAccessibility"></p>
            </div>
        </div>
    )
}

export default Bored;