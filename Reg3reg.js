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
SEdateEnd = JSON.parse(localStorage.getItem("EdateEnd"));
SEDescription = JSON.parse(localStorage.getItem("EDescription"));

// localStorage.setItem("Eposition", JSON.stringify(SEposition));
// localStorage.setItem("Eemployer", JSON.stringify(SEemployer));
// localStorage.setItem("EdateStart", JSON.stringify(SEdateStart)); 
// localStorage.setItem("EdateEnd", JSON.stringify(SEdateEnd));
// localStorage.setItem("EDescription", JSON.stringify(SEDescription));


for(let i = 0; i < Eposition.length; i++){
    Eposition[i] = SEposition[i];
    Eemployer[i] = SEemployer[i];
    EdateStart[i] = SEdateStart[i];
    EdateEnd[i] = SEdateEnd[i];
    EDescription[i] = SEDescription[i];
        if(i > 0){
            
                document.getElementsByClassName("PDD")[0].innerHTML+= `
                <div class="Satauri">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ </div>
                <div class="position-Out"></div>
                <div class="date-out"></div>
                <div class="Description-Out"> </div>
                <div class="Line-under"></div>
                
                `
        }
    document.getElementsByClassName('position-Out')[i].innerHTML = SEposition[i] + " " + SEemployer[i];
    document.getElementsByClassName('date-out')[i].innerHTML = SEdateStart[i] + " " + SEdateEnd[i];
    document.getElementsByClassName('Description-Out')[i].innerHTML = SEDescription[i];
}


let ElearnIn = [];
let ESlearnIn = [];

let EDegree = [];
let ESDegree = [];

let EDegreedate = [];
let ESDegreedate = [];

let Einfo = [];
let ESinfo = [];

ESlearnIn = JSON.parse(localStorage.getItem("ElearnIn"))
ESDegree = JSON.parse(localStorage.getItem("EDegree"))
ESdegdate = JSON.parse(localStorage.getItem("Edegdate"))
ESinfo = JSON.parse(localStorage.getItem("Einfo"))

for(let i = 0; i < SEposition.length-1; i++){
    repeat();
}



for(let i = 0; i<ElearnIn.length; i++){
    ElearnIn[i] = ESlearnIn[i];
    EDegree[i] = ESDegree[i];
    EDegreedate[i] = ESDegreedate[i];
    Einfo[i] = ESinfo[i];

    document.getElementsByClassName("learn-In")[i].value = ElearnIn[i];
    document.getElementsByClassName("date-finish")[i].value = Edegdate[i];
    document.getElementsByClassName("info-In")[i].value = Einfo[i];
}


function PAE(i){
    let x=document.getElementsByClassName("learn-In")[i].value;
    let y=document.getElementsByClassName("Select-form")[i].value;

    ElearnIn[i] = x;
    localStorage.setItem("ElearnIn", JSON.stringify(ElearnIn));
    document.getElementsByClassName("Degree_Out")[i].innerHTML = x + ", " + y

    
}


function PAE(i){
    let x=document.getElementsByClassName("learn-In")[i].value;
    let y=document.getElementsByClassName("Select-form")[i].value;
    EDegree[i] = y;
    localStorage.setItem("EDegree", JSON.stringify(EDegree));
    document.getElementsByClassName("Degree_Out")[i].innerHTML = x + ", " + y
}



function Datefunction(i){
    var x=document.getElementsByClassName("date-finish")[i].value;
    Edegdate[i] = x;
    localStorage.setItem("EDegreedate", JSON.stringify(EDegreedate));
    // console.log("WRYYYYYYYYYYYYYYYYYYYYYYYY")
    document.getElementsByClassName("date-finish-Out")[i].innerHTML = x
}


function InfoFunction(i){
    var x=document.getElementsByClassName("info-In")[i].value;
    Einfo[i] = x;
    localStorage.setItem("Einfo", JSON.stringify(Einfo));
    // console.log("WRYYYYYYYYYYYYYYYYYYYYYYYY")
    document.getElementsByClassName("info_Out")[i].innerHTML = x
    // console.log(document.getElementsByClassName("info_Out")[i])
}

function repeat(){
    geralt +=1;
    document.getElementsByClassName("EXP-grid")[0].innerHTML+= `
    <div id="learn-holder">
            <div class="saxeli">სასწავლებელი</div>
            <div><input class="learn-In" placeholder="სასწავლებელი" type="text"  onkeyup="PAE(${(geralt)})" /></div>
            <div class="Hint1">მინიმუმ 2 ასო, ქართული ასოები</div>
        </div>



        <div id="date">
            <div id="date-flex1">
            <div class="saxeli">ხარისხი</div>
            <select class="Select-form"  onchange="PAE(${(geralt)})"> 
            <option value="l78055">please select</option>
                
            </select>
            </div>
            <div id="date-flex2">
                <div class="saxeli">დამთავრების რიცხვი</div>
                <input class="date-finish" type="date" onchange="Datefunction(${(geralt)})" />
            </div>
        </div>
        
        <div id="Description">
            <div class="saxeli">აღწერა</div>
            <div><textarea placeholder="განათლების აღწერა" class="info-In" type="text" onkeyup="InfoFunction(${(geralt)})" ></textarea></div>
        </div>
        <div id="line2"></div>
    </div>`;
    
    document.getElementsByClassName("PDD_under")[0].innerHTML+= `
        <div class="Satauri">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
        <div class="Degree_Out"></div>
        <div class="date-finish-Out"></div>
        <div class="info_Out"></div>
        `
        // if(ESlearnIn && ESDegree && ESinfo && EDegreedate)
        for(let dio=0;dio<document.getElementsByClassName('learn-In').length-1;dio++){
        document.getElementsByClassName('learn-In')[dio].value=ElearnIn[dio];
        document.getElementsByClassName('Select-form')[dio].value=EDegree[dio];
        document.getElementsByClassName('date-finish')[dio].value=EDegreedate[dio];
        document.getElementsByClassName('info-In')[dio].value=Einfo[dio];

       }
    //    if(ESlearnIn && ESDegree && ESinfo && EDegreedate)
       for(let dio=0;dio<document.getElementsByClassName('learn-In').length-1;dio++){
        document.getElementsByClassName('Degree_Out')[dio].value= ESlearnIn[dio] + ESDegree[dio];
        document.getElementsByClassName('date-finish-Out')[dio].value= EDegreedate[dio] 
        document.getElementsByClassName('info_Out')[dio].value = ESinfo[dio];
       }
}
