let groomingService= {
    name: "Mark's Grooming Service",
    address: "432 Doggo ln",
    hours:{
        open: "9:00am",
        close: "7:00pm"
    },
    services: ["haircuts", "baths", "nail trimming", "full service"],
    pets:[]
}
//constructor function
// ----------------- Parameters/ local variables ------------------->
function Pet(name, age, gender, breed, service, ownerName, ownerPhone){
    //attributes = parameter
    this.name=name; 
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=ownerPhone;
}


for (let i = 0; i < groomingService.pets.length; i++) {
    console.log(groomingService.pets[i].name);
}


function displayInfo(){
    document.getElementById("groomingInfo").innerHTML=`Welcome to ${groomingService.name}! We're open from ${groomingService.hours.open} to ${groomingService.hours.close}. We're located at ${groomingService.address}`;
}

function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML=`There are ${groomingService.pets.length} pets currently registered.`;
}

function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.service=="" || aPet.ownerPhone==""){
        valid=false;
    }
    return valid;
}

function register(){
    let petName=document.getElementById("txtPetName").value;
    let petAge=document.getElementById("numPetAge").value;
    let petGender=document.getElementById("txtPetGender").value;
    let petBreed=document.getElementById("txtPetBreed").value;
    let petService=document.getElementById("selService").value;
    let ownerName=document.getElementById("txtOwnerName").value;
    let ownerPhone=document.getElementById("txtPhone").value;
    //create obj
    let newPet = new Pet(petName, petAge, petGender, petBreed, petService, ownerName, ownerPhone);
    if(isValid(newPet)){
    //push obj
        groomingService.pets.push(newPet);
        displayCardPets();
        displayNumberOfPets();
        clearInputs();
}else{
    alert("Please enter required information")
}
}

function clearInputs(){
    let petName=document.getElementById("txtPetName").value="";
    let petAge=document.getElementById("numPetAge").value="";
    let petGender=document.getElementById("txtPetGender").value="";
    let petBreed=document.getElementById("txtPetBreed").value="";
    let petService=document.getElementById("selservice").value="";
    let ownerName=document.getElementById("txtownerName").value="";
    let ownerPhone=document.getElementById("txtPhone").value="";
}


function init(){
    //main function
    let pepe = new Pet("Pepe", 7, "M", "Doberman", "bath", "Mark", "123-456-7890");
    let courage = new Pet("Courage", 12, "M", "Mix", "Full Service", "Eustace", "666-666-6666");
    let pluto = new Pet("Pluto", 13, "Bloodhound", "M", "Nail Trim", "Mickey", "999-999-9999" );

    groomingService.pets.push(pepe, courage, pluto)
    //calling functions
    displayInfo();
    displayNumberOfPets();
    //displayCardPets();
    displayPetsTable();
    //hook(handle) events
}

window.onload=init;