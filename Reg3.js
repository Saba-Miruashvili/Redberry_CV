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

let Edegdate = [];
let ESdegdate = [];

let Einfo = [];
let ESinfo = [];


ESlearnIn = JSON.parse(localStorage.getItem("ElearnIn"))
ESDegree = JSON.parse(localStorage.getItem("EDegree"))
ESdegdate = JSON.parse(localStorage.getItem("Edegdate"))
ESinfo = JSON.parse(localStorage.getItem("Einfo"))




let Maximus 
if(ESlearnIn && ESDegree && ESinfo){Maximus = Math.max(ESlearnIn.length, ESDegree.length,  ESinfo.length)}

for(let i = 0; i < Maximus; i++){
    Maximus = Math.max(ESlearnIn.length, ESDegree.length,  ESinfo.length);
    if(
    (ESlearnIn[i] == "" || ESlearnIn[i] == null || ESlearnIn[i] == undefined)
    &&(ESDegree[i] == "" || ESDegree[i] == null || ESDegree[i] == undefined)
    &&(ESdegdate[i] == "" || ESdegdate[i] == null || ESdegdate[i] == undefined)
    &&(ESinfo[i] == "" || ESinfo[i] == null || ESinfo[i] == undefined)
    )
    
    {
        ESlearnIn.splice(i,1);
        ESDegree.splice(i,1);
        ESdegdate.splice(i,1);
        ESinfo.splice(i,1);
        i--;

    }


}


for(let i = 0; i < ESlearnIn.length -1; i++){
    repeat();
}



localStorage.setItem("ElearnIn", JSON.stringify(ESlearnIn));
localStorage.setItem("EDegree", JSON.stringify(ESDegree));
localStorage.setItem("Edegdate", JSON.stringify(ESdegdate)); 
localStorage.setItem("Einfo", JSON.stringify(ESinfo));

console.log(ESlearnIn)

if(ESlearnIn && ESDegree && ESinfo && ESdegdate)
    for(let i = 0; i < ESlearnIn.length ; i++){
    ElearnIn[i] = ESlearnIn[i];
    EDegree[i] = ESDegree[i];
    Edegdate[i] = ESdegdate[i];
    Einfo[i] = ESinfo[i];
    console.log(i);
    console.log(ElearnIn)

    document.getElementsByClassName("learn-In")[i].value = ElearnIn[i];
    // document.getElementsByClassName("Select-form")[i].value = EDegree[i];
    document.getElementsByClassName("date-finish")[i].value = Edegdate[i];
    document.getElementsByClassName("info-In")[i].value = Einfo[i];
    

    document.getElementsByClassName('Degree_Out')[i].innerHTML = ESlearnIn[i] + " " + ESDegree[i];
    document.getElementsByClassName('date-finish-Out')[i].innerHTML = ESdegdate[i];

    document.getElementsByClassName('info_Out')[i].innerHTML = ESinfo[i];

}




function PAE(i){
    let x=document.getElementsByClassName("learn-In")[i].value;
    ElearnIn[i] = x;
    localStorage.setItem("ElearnIn", JSON.stringify(ElearnIn));
    console.log("sadasd")
    
    let y=document.getElementsByClassName("Select-form")[i].value;
    EDegree[i] = y;
    localStorage.setItem("EDegree", JSON.stringify(EDegree));

    document.getElementsByClassName("Degree_Out")[i].innerHTML = x + ", " + y

    
}

function Datefunction(i){
    var x=document.getElementsByClassName("date-finish")[i].value;
    Edegdate[i] = x;
    localStorage.setItem("Edegdate", JSON.stringify(Edegdate));
    // console.log("WRYYYYYYYYYYYYYYYYYYYYYYYY")
    document.getElementsByClassName("date-finish-Out")[i].innerHTML = x
}


function InfoFunction(i){
    var x=document.getElementsByClassName("info-In")[i].value;
    Einfo[i] = x;
    localStorage.setItem("Einfo", JSON.stringify(Einfo));
    console.log("WRYYYYYYYYYYYYYYYYYYYYYYYY")
    document.getElementsByClassName("info_Out")[i].innerHTML = x
    // console.log(document.getElementsByClassName("info_Out")[i])
}

















for(let i = 0; i < ESlearnIn.length - 1; i++){
    const RedApi = "https://resume.redberryinternship.ge/api/degrees"
  
 async function APE(url) {
    // Storing response
    let response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    
    
    
        for(let i in data){
        console.log('learn-in')
        for(let j=0;j<document.getElementsByClassName('learn-In').length;j++ ){
            document.getElementsByClassName('Select-form')[j].innerHTML+=`<option value="${data[i].title}">${data[i].title}</option>`}
    
            if(localStorage.getItem('EDegree')){   
            SEDegree=JSON.parse(localStorage.getItem('EDegree'))
            for(let j=0;j<SEDegree.length;j++){
                let a=document.getElementsByClassName('Select-form')[j].value;
                document.getElementsByClassName('learn-In')[j].innerHTML=a+', '+SEDegree[j];
                document.getElementsByClassName('Select-form')[j].value=SEDegree[j];
            
        }
        }
    }
    
    } APE(RedApi);
}



    // Calling that async function
   


    function repeat(){
        geralt += 1;
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
            if(ESlearnIn && ESDegree && ESinfo && ESdegdate)
            for(let dio=0;dio<document.getElementsByClassName('learn-In').length-1;dio++){
            document.getElementsByClassName('learn-In')[dio].value=ElearnIn[dio];
            document.getElementsByClassName('Select-form')[dio].value=EDegree[dio];
            document.getElementsByClassName('date-finish')[dio].value=Edegdate[dio];
            document.getElementsByClassName('info-In')[dio].value=Einfo[dio];

           }
           if(ESlearnIn && ESDegree && ESinfo && ESdegdate)
           for(let dio=0;dio<document.getElementsByClassName('learn-In').length-1;dio++){
            document.getElementsByClassName('Degree_Out')[dio].value= ESlearnIn[dio] + ESDegree[dio];
            document.getElementsByClassName('date-finish-Out')[dio].value= ESdegdate[dio] 
            document.getElementsByClassName('info_Out')[dio].value = ESinfo[dio];
           }
    }
    

    function ValidateName(a)
    {
      
      var regx = /[^ა-ჰ]/;
      var Name = document.getElementsByClassName("learn-In")[a].value;
    //  console.log("a")
      
      if( regx.test(Name) == true || Name.length<2){
        //   alert('Youre an ivnalid');
        document.getElementsByClassName("learn-In")[a].style.borderColor = "red";
        document.getElementsByClassName("saxeli")[a].style.color = "red";
        // document.getElementsByClassName("stop")[0].style.visibility = "visible"
        // console.log("WRYYYYYYYYYYYYY");
          return false;
       }else{
        // document.getElementsByClassName("stop")[0].style.visibility = "hidden";
        document.getElementsByClassName("learn-In")[a].style.borderColor = "green";
        document.getElementsByClassName("saxeli")[a].style.color = "black";
        return true
        
       }
    }


    function Validateinfo(a)
    {
      
      var Name = document.getElementsByClassName("info-In")[a].value;

      if( regx.test(Name) == true || Name<2){
        //   alert('Youre an ivnalid');
        document.getElementsByClassName("info-In")[a].style.borderColor = "red";
        document.getElementsByClassName("saxeli")[a].style.color = "red";
        console.log
        // document.getElementsByClassName("stop")[0].style.visibility = "visible"
        // console.log("WRYYYYYYYYYYYYY");
          return false;
       }else{
        // document.getElementsByClassName("stop")[0].style.visibility = "hidden";
        document.getElementsByClassName("info-In").style.borderColor = "green";
        document.getElementsByClassName("saxeli")[a].style.color = "black";
        return true
        
       }
    }

    function EraseAll(){
        localStorage.clear();
        location.href="index.html";
    }