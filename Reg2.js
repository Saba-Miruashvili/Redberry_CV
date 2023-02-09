document.getElementById("display_image").style.backgroundImage=localStorage.getItem("Image")
document.getElementById("NumberOut").innerHTML = localStorage.getItem("phone")
document.getElementById("nameOut").innerHTML = localStorage.getItem("Name") + " " + localStorage.getItem("Surname")
document.getElementById("emailOut").innerHTML = localStorage.getItem("email")
document.getElementById("l77013Out").innerHTML = localStorage.getItem("AboutMe")

var geralt = 0;

let Eposition = [];
let SEposition = [];

let Eemployer = [];
let SEemployer =[];

let EdateStart = [];
let SEdateStart = [];

let EdateEnd = [];
let SEdateEnd = [];

let EDescription = [];
let SEDescription = [];

SEposition = JSON.parse(localStorage.getItem("Eposition"));
SEemployer = JSON.parse(localStorage.getItem("Eemployer"));
SEdateStart = JSON.parse(localStorage.getItem("EdateStart"));
SEdateEnd = JSON.parse(localStorage.getItem("EdateStart"));
SEDescription = JSON.parse(localStorage.getItem("EDescription"));

// console.log(SEposition);
// Eposition = JSON.parse(localStorage.getItem("SEposition"));

// document.getElementsByClassName("position-In")[0].value = Eposition[0];


for(let i = 0; i < SEposition.length; i++){
    if(SEposition[i] == "" || SEposition[i] == null){
        SEposition.splice(i,1);
        i--;
        
    }
}


localStorage.setItem("Eposition", JSON.stringify(SEposition));
localStorage.setItem("Eemployer", JSON.stringify(SEemployer));
localStorage.setItem("EdateStart", JSON.stringify(SEdateStart)); 
localStorage.setItem("EdateEnd", JSON.stringify(SEdateEnd));
localStorage.setItem("EDescription", JSON.stringify(SEDescription));


for(let i = 0; i < SEposition.length -1; i++){
    repeat();
}



for(let i = 0; i < SEposition.length; i++){
    Eposition[i] = SEposition[i];
    Eemployer[i] = SEemployer[i];
    EdateStart[i] = SEdateStart[i];
    EdateEnd[i] = SEdateEnd[i];
    EDescription[i] = SEDescription[i]; 
    document.getElementsByClassName("position-In")[i].value = Eposition[i];
    document.getElementsByClassName("employer-In")[i].value = Eemployer[i];
    document.getElementsByClassName("date-start")[i].value = EdateStart[i];
    document.getElementsByClassName("date-end")[i].value = EdateEnd[i];
    document.getElementsByClassName("Description-In")[i].value = EDescription[i];
}





// console.log(SEposition);




// fruits.splice(2, 2);

function PAE(i){
    let x=document.getElementsByClassName("position-In")[i].value;
    Eposition[i] = x;
    localStorage.setItem("Eposition", JSON.stringify(Eposition));
    
    
    let y=document.getElementsByClassName("employer-In")[i].value;
    Eemployer[i] = y;
    localStorage.setItem("Eemployer", JSON.stringify(Eemployer));

    document.getElementsByClassName("position-Out")[i].innerHTML = x + ", " + y

    
}




function Datefunction(i){
    var x=document.getElementsByClassName("date-start")[i].value;
    EdateStart[i] = x;
    localStorage.setItem("EdateStart", JSON.stringify(EdateStart));
    
    var y=document.getElementsByClassName("date-end")[i].value;
    EdateEnd[i] = y;
    localStorage.setItem("EdateEnd", JSON.stringify(EdateEnd));
    
    document.getElementsByClassName("date-out")[i].innerHTML = x + " - " + y;
   
    
    console.log("WRYYYYYYYYYYYYYYYYYYYYYYYY")
}
function Descriptionfunction(i){
    var x=document.getElementsByClassName("Description-In")[i].value;
    document.getElementsByClassName("Description-Out")[i].innerHTML =  x;
    // console.log(document.getElementsByClassName("Description-Out")[i])
    EDescription[i] = x;
    localStorage.setItem("EDescription", JSON.stringify(EDescription));

}







function repeat(){
    geralt +=1;
    document.getElementsByClassName("EXP-grid")[0].innerHTML+= `
    <div id="position-holder">
    <div class="saxeli">თანამდებობა</div>
    <div><input placeholder="დეველოპერი, დიზაინერი, ა.შ." type="text" class="position-In" onkeyup="PAE(${(geralt)})" /></div>
    <div class="Hint1">მინიმუმ 2 ასო, ქართული ასოები</div>
</div>
<div id="employer-holder">
    <div class="saxeli">დამსაქმებელი</div>
    <div><input placeholder="დამსაქმებელი" type="text" class="employer-In" onkeyup="PAE(${(geralt)})" /></div>
    <div class="Hint1">მინიმუმ 2 ასო, ქართული ასოები</div>
</div>
<div id="date">
      <div id="date-flex1">
        <div class="saxeli">დაწყების რიცხვი</div> <input class="date-start" type="date" onchange="Datefunction(${(geralt)})" />
      </div>
      <div id="date-flex2">
        <div class="saxeli">დამთავრების რიცხვი</div> <input class="date-end" type="date" onchange="Datefunction(${(geralt)})" />
      </div>
</div>

<div id="Description">
    <div class="saxeli">აღწერა</div>
    <div><textarea placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" class="Description-In" type="text" onkeyup="Descriptionfunction(${(geralt)})" ></textarea></div>
</div>
<div id="line2"></div>`;
    
    document.getElementById("Right-grid").innerHTML+= `
    <div class="PDD">
    <div class="Satauri">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ </div>
    <div class="position-Out"></div>
    <div class="date-out"></div>
    <div class="Description-Out"> </div>
    </div>
    `
    
    for(let dio=0;dio<document.getElementsByClassName('position-In').length-1;dio++){
        document.getElementsByClassName('position-In')[dio].value=Eposition[dio];
        document.getElementsByClassName('employer-In')[dio].value=Eemployer[dio];
        document.getElementsByClassName('date-start')[dio].value=EdateStart[dio];
        document.getElementsByClassName('date-end')[dio].value=EdateEnd[dio];
        document.getElementsByClassName('Description-In')[dio].value=EDescription[dio];
       }

}

