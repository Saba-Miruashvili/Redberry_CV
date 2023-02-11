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

localStorage.setItem("Eposition", JSON.stringify(SEposition));
localStorage.setItem("Eemployer", JSON.stringify(SEemployer));
localStorage.setItem("EdateStart", JSON.stringify(SEdateStart)); 
localStorage.setItem("EdateEnd", JSON.stringify(SEdateEnd));
localStorage.setItem("EDescription", JSON.stringify(SEDescription));


for(let i = 0; i < SEposition.length; i++){
    Eposition[i] = SEposition[i];
    Eemployer[i] = SEemployer[i];
    EdateStart[i] = SEdateStart[i];
    EdateEnd[i] = SEdateEnd[i];
    EDescription[i] = SEDescription[i];
        if(i > 0){
            
                document.getElementById("Right-grid").innerHTML+= `
                <div class="PDD">
                <div class="Satauri">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ </div>
                <div class="position-Out"></div>
                <div class="date-out"></div>
                <div class="Description-Out"> </div>
                <div class="Line-under"></div>
                </div>
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

let Edegdate = [];
let ESdegdate = [];

let Eselectform = [];
let ESselectform = [];


ESlearnIn = JSON.parse(localStorage.getItem("ElearnIn"))
ESDegree = JSON.parse(localStorage.getItem("EDegree"))
ESdegdate = JSON.parse(localStorage.getItem("Edegdate"))
ESselectform = JSON.parse(localStorage.getItem("Eselectform"))

localStorage.setItem("ElearnIn", JSON.stringify(ESlearnIn));
localStorage.setItem("EDegree", JSON.stringify(ESDegree));
localStorage.setItem("Edegdate", JSON.stringify(ESdegdate)); 
localStorage.setItem("Eselectform", JSON.stringify(ESselectform));


for(let i = 0; i < ESlearnIn.length; i++){
    ElearnIn[i] = ESlearnIn[i];
    EDegree[i] = ESDegree[i];
    Edegdate[i] = ESdegdate[i];
    Eselectform[i] = ESselectform[i];
 
    document.getElementsByClassName("learn-In")[i].value = ElearnIn[i];
    document.getElementsByClassName("Select-form")[i].value = EDegree[i];
    document.getElementsByClassName("date-finish")[i].value = Edegdate[i];
    document.getElementsByClassName("info_Out")[i].value = Eselectform[i];


    document.getElementsByClassName('Degree_Out')[i].innerHTML = ESlearnIn[i] + " " + ESDegree[i];
    document.getElementsByClassName('date-finish-Out')[i].innerHTML = ESdegdate[i]
    document.getElementsByClassName('date-finish-Out')[i].innerHTML = Edegdate[i];
}



function PAE(i){
    let x=document.getElementsByClassName("learn-In")[i].value;
    ElearnIn[i] = x;
    localStorage.setItem("ElearnIn", JSON.stringify(ElearnIn));
    
    
    let y=document.getElementsByClassName("employer-In")[i].value;
    Eemployer[i] = y;
    localStorage.setItem("Eemployer", JSON.stringify(Eemployer));

    document.getElementsByClassName("position-Out")[i].innerHTML = x + ", " + y

    
}





















 const RedApi = "https://resume.redberryinternship.ge/api/degrees"
  
  async function APE(url) {
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    
    
    
        for(let i in data){
    
        for(let j=0;j<document.getElementsByClassName('Select-form').length;j++ ){
            document.getElementsByClassName('Select-form')[j].innerHTML+=`<option value="${data[i].title}">${data[i].title}</option>`}
    
            if(localStorage.getItem('Degree')){   
            SEDegree=JSON.parse(localStorage.getItem('Degree'))
            for(let j=0;j<savedDeg.length;j++){
                const a=document.getElementsByClassName('learn-In')[j].value;
                
    
                document.getElementsByClassName('Degree_Out')[j].innerHTML=a+', '+savedDeg[j];
            document.getElementsByClassName('Select-form')[j].value=savedDeg[j];
            
        }
        }
    }
    
    }
    // Calling that async function
    APE(RedApi);