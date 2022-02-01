import React, { useState } from "react";

function PetDataInput() {
    const [CardPetsList, setCardPetsList] = useState({})
    const [petCard, setPetCard] = useState({
        Name: '',
        Age: 0,
        Type: '',
        Color: ''
    });

    function addRadio(colorValue) {
        setPetCard({ ...petCard, Color: colorValue })
    }

    function petName(nameValue) {
        setPetCard({ ...petCard, Name: nameValue })
    }

    function petAge(ageValue) {
        setPetCard({ ...petCard, Age: ageValue })
    }

    function petType(typeValue) {
        setPetCard({ ...petCard, Type: typeValue })
    }

    function submitCard(CardValue) {
        const newPetList = [];
        newPetList.push(CardValue)
        setCardPetsList(CardValue)
    }

    return (
        <div type="submit">
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
            <button type='submit' onSubmit={() => submitCard(petCard)} >Add Card</button>
            <h2>New Pet Card</h2>
            <h3>Your pet: </h3>
            <p>Name: {petCard.Name} </p>
            <p>Age: {petCard.Age} </p>
            <p>Type: {petCard.Type} </p>
            <p>Color: {petCard.Color} </p>
        </div>
    )
}

export default PetDataInput;