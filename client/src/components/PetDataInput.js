import React from "react";

function PetDataInput({ addRadio, petName, petAge, petType, submitCard, Name, Age, Type, Color, petCard }) {
    return (
        <div >
            <div>
                <label for="name" >My pet name is: </label>
                <input type="text" id="name" maxLength="25" onChange={(e) => petName(e.target.value)} /> <br></br>
            </div>
            <br></br>
            <div>
                <label for="age" >My pet age is: </label>
                <input type="number" min="1" id="age" onChange={(e) => petAge(e.target.value)} /><br></br>
            </div>
            <div><br></br>
                <label for="pets"> Choose your pet: </label>
                <select name="pets" id="pets" onChange={(e) => petType(e.target.value)} >
                    <option value="noValue" >Choose</option>
                    <option value="Dog" >Dog</option>
                    <option value="Cat" >Cat</option>
                    <option value="Horse" >Horse</option>
                    <option value="Other" >Other</option>
                </select>
            </div><br></br>
            <div >
                <input type="radio" id="White" name="petColor" value="White" onChange={(e) => addRadio(e.target.value)} />
                <label for="White">White</label><br />
                <input type="radio" id="Black" name="petColor" value="Black" onChange={(e) => addRadio(e.target.value)} />
                <label for="Black">Black</label><br></br>
            </div>
            <br></br>
            <h2>New Pet Card</h2>
            <h3>Your pet: </h3>
            <p>Name: {Name} </p>
            <p>Age: {Age} </p>
            <p>Type: {Type} </p>
            <p>Color: {Color} </p>
            <button type='submit' onClick={() => submitCard(petCard)} >Add Card</button>
        </div>
    )
}

export default PetDataInput;