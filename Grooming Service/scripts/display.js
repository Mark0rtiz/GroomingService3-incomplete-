function displayCardPets(){
    //travel the array
    let card=""
    for (let i = 0; i < groomingService.pets.length; i++){
        let pet=groomingService.pets[i];
        card+=`
            <div class="petCard">
            <h4>Name: ${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Owner: ${pet.owner}</p>
            <p>Phone Number: ${pet.phone}</p>
        </div>
        `;
    }

    //create the card (HTML)

    //inject card into HTML (register.html)
    document.getElementById("pet-cards").innerHTML=card;


}

function displayPetsTable(){
    //travel array, r+= (tr, th, td), inject into HTML table
    let tr=""
    for (let i = 0; i < groomingService.pets.length; i++){
        let pet=groomingService.pets[i];
        tr+=`
        <tr class="petTable">
            <td>Name: ${pet.name}</td>
            <td>Age: ${pet.age}</td>
            <td>Gender: ${pet.gender}</td>
            <td>Breed: ${pet.breed}</td>
            <td>Service: ${pet.service}</td>
            <td>Owner: ${pet.owner}</td>
            <td>Phone Number: ${pet.phone}</td>
        </tr>
`;
        document.getElementById("pet-table").innerHTML=tr;
}
}