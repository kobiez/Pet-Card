import React, { useState } from "react";
import PetDataInput from "./PetDataInput";

function PetControl() {
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

    async function submitCard(cardValue) {
        try {
            const response = await fetch('http://localhost:8000/api/v1/pet', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cardValue)
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <PetDataInput
            addRadio={addRadio}
            petName={petName}
            petAge={petAge}
            petType={petType}
            submitCard={submitCard}
            Name={petCard.Name}
            Age={petCard.Age}
            Type={petCard.Type}
            Color={petCard.Color}
            petCard={petCard}
        />
    )
}

export default PetControl;