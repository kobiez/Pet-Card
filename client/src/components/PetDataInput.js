import React, {useState} from "react";

function PetDataInput() {
    const [CardPetsList, setCardPetsList] = useState([])
    const petCard = {
        Name:'yoyo',
        Age: 2 ,
        Type:'Dog',
        Color:'White'
    };

    function addRadio(colorValue) {
        petCard.Color = colorValue;
    }

    function petName(nameValue) {
        petCard.Name = nameValue;
    }

    function petAge(ageValue) {
        petCard.Age = ageValue;
    }
    
    function petType(typeValue) {
        petCard.Type = typeValue;
    }
    
    function submitCard(CardValue) {
        const newPetList = [];
        newPetList.push(CardValue)
        setCardPetsList(CardValue)
    }

    const viewCard = CardPetsList.map((card) => <p> { card } </p>)

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
                <select name="pets" id="pets" >
                    <option value="Dog"  onSelect={(e) => petType(e.target.value)}>Dog</option>
                    <option value="Cat" onSelect={(e) => petType(e.target.value)}>Cat</option>
                    <option value="Horse" onSelect={(e) => petType(e.target.value)}>Horse</option>
                    <option value="Other" onSelect={(e) => petType(e.target.value)}>Other</option>
                </select>
            </div><br></br>
            <div >
                <input type="radio" id="White" name="petColor" value="White" onChange={(e) => addRadio(e.target.value)}/>
                <label for="White">White</label><br/>
                <input type="radio" id="Black" name="petColor" value="Black" onChange={(e) => addRadio(e.target.value)}/>
                <label for="Black">Black</label><br></br>
            </div>
            <br></br>
            <button type='submit' onSubmit={() => submitCard(petCard)} >Add Card</button>
            <h2>New Pet Card</h2><br></br>
            <p>Your pet: {viewCard}</p>
        </div>
    )
}

export default PetDataInput;