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

// console.log(SEposition);
// Eposition = JSON.parse(localStorage.getItem("SEposition"));

// document.getElementsByClassName("position-In")[0].value = Eposition[0];


let Maximus 
Maximus = Math.max(SEposition.length, SEemployer.length,  SEDescription.length); 

for(let i = 0; i < Maximus; i++){
    Maximus = Math.max(SEposition.length, SEemployer.length,SEDescription.length); 
    if(
    (SEposition[i] == "" || SEposition[i] == null || SEposition[i] == undefined)
    &&(SEemployer[i] == "" || SEemployer[i] == null || SEemployer[i] == undefined)
    &&(SEdateStart[i] == "" || SEdateStart[i] == null || SEdateStart[i] == undefined)
    &&(SEdateEnd[i] == "" || SEdateEnd[i] == null || SEdateEnd[i] == undefined)
    &&(SEDescription[i] == "" || SEDescription[i] == null || SEDescription[i] == undefined)
    )
    
    {
        SEposition.splice(i,1);
        SEemployer.splice(i,1);
        SEdateStart.splice(i,1);
        SEdateEnd.splice(i,1);
        SEDescription.splice(i,1);
        i--;

    }


}


// localStorage.setItem("Eposition", JSON.stringify(SEposition));
// localStorage.setItem("Eemployer", JSON.stringify(SEemployer));
// localStorage.setItem("EdateStart", JSON.stringify(SEdateStart)); 
// localStorage.setItem("EdateEnd", JSON.stringify(SEdateEnd));
// localStorage.setItem("EDescription", JSON.stringify(SEDescription));


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
    document.getElementsByClassName("Description-In")[i].value = SEDescription[i];


    document.getElementsByClassName('position-Out')[i].innerHTML = SEposition[i] + " " + SEemployer[i];
    document.getElementsByClassName('date-out')[i].innerHTML = SEdateStart[i] + " " + SEdateEnd[i];
    document.getElementsByClassName('Description-Out')[i].innerHTML = SEDescription[i];
}





console.log(SEposition);




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
    <div class="saxeli">?????????????????????????????????</div>
    <div><input placeholder="??????????????????????????????, ???????????????????????????, ???.???." type="text" class="position-In" onkeyup="PAE(${(geralt)});ValidateName(${(geralt)})" /></div>
    <div class="Hint1">????????????????????? 2 ?????????, ????????????????????? ??????????????????</div>
</div>
<div id="employer-holder">
    <div class="saxeli">????????????????????????????????????</div>
    <div><input placeholder="????????????????????????????????????" type="text" class="employer-In" onkeyup="PAE(${(geralt)});ValidateEmp(${(geralt)})" /></div>
    <div class="Hint1">????????????????????? 2 ?????????, ????????????????????? ??????????????????</div>
</div>
<div id="date">
      <div id="date-flex1">
        <div class="saxeli">???????????????????????? ??????????????????</div> <input class="date-start" type="date" onchange="Datefunction(${(geralt)})" />
      </div>
      <div id="date-flex2">
        <div class="saxeli">????????????????????????????????? ??????????????????</div> <input class="date-end" type="date" onchange="Datefunction(${(geralt)})" />
      </div>
</div>

<div id="Description">
    <div class="saxeli">??????????????????</div>
    <div><textarea placeholder="???????????? ??????????????????????????????????????? ?????? ?????????????????? ??????????????????" class="Description-In" type="text" onkeyup="Descriptionfunction(${(geralt)})" ></textarea></div>
</div>
<div id="line2"></div>`;
    
    document.getElementsByClassName("PDD")[0].innerHTML+= `

    <div class="Satauri">????????????????????????????????? </div>
    <div class="position-Out"></div>
    <div class="date-out"></div>
    <div class="Description-Out"> </div>
    <div class="Line-under"></div>

    `
    
    for(let dio=0;dio<document.getElementsByClassName('position-In').length-1;dio++){
        document.getElementsByClassName('position-In')[dio].value=Eposition[dio];
        document.getElementsByClassName('employer-In')[dio].value=Eemployer[dio];
        document.getElementsByClassName('date-start')[dio].value=EdateStart[dio];
        document.getElementsByClassName('date-end')[dio].value=EdateEnd[dio];
        // document.getElementsByClassName('date-out')[dio].innerHTML= SEdateStart[dio] + " " + SEdateEnd[dio];
        document.getElementsByClassName('Description-In')[dio].value=EDescription[dio];
       }
    for(let dio=0;dio<document.getElementsByClassName('position-In').length-1;dio++){
        document.getElementsByClassName('position-Out')[dio].value= SEposition[dio];

        document.getElementsByClassName('date-out')[dio].value= SEdateStart[dio] + " " + SEdateEnd[dio];
        
        // document.getElementsByClassName('date-start-out')[dio].value= SEdateStart[dio];
        // document.getElementsByClassName('date-end-out')[dio].value= SEdateStart[dio];
        document.getElementsByClassName('Description-Out')[dio].value = SEDescription[dio];
       }
}

function ValidateName(a){

var Name = document.getElementsByClassName("position-In")[a].value;
//  console.log("a")

if(Name.length<2){
  //   alert('Youre an ivnalid');
  document.getElementsByClassName("position-In")[a].style.borderColor = "red";
  document.getElementsByClassName("saxeli")[a].style.color = "red";
  // document.getElementsByClassName("stop")[0].style.visibility = "visible"
  // console.log("WRYYYYYYYYYYYYY");
    return false;
 }else{
  // document.getElementsByClassName("stop")[0].style.visibility = "hidden";
  document.getElementsByClassName("position-In")[a].style.borderColor = "green";
  document.getElementsByClassName("saxeli")[a].style.color = "black";
  return true
  
 }
}
function ValidateEmp(a){

    var Name = document.getElementsByClassName("employer-In")[a].value;
    //  console.log("a")
    
    if(Name.length<2){
      //   alert('Youre an ivnalid');
      document.getElementsByClassName("employer-In")[a].style.borderColor = "red";
      document.getElementsByClassName("saxeli")[a].style.color = "red";
      // document.getElementsByClassName("stop")[0].style.visibility = "visible"
      // console.log("WRYYYYYYYYYYYYY");
        return false;
     }else{
      // document.getElementsByClassName("stop")[0].style.visibility = "hidden";
      document.getElementsByClassName("employer-In")[a].style.borderColor = "green";
      document.getElementsByClassName("saxeli")[a].style.color = "black";
      return true
      
     }
    }


function ValidateDate(a){
    if(getElementsByClassName("date-start")[a].value == ""){
        document.getElementsByClassName("date-start")[a].style.borderColor = "red";
        document.getElementsByClassName("saxeli")[a].style.color = "red";
        return false;
    }else{
        document.getElementsByClassName("date-start")[a].style.borderColor = "green";
        document.getElementsByClassName("saxeli")[a].style.color = "black";
        return true;
    }
}

function ValidateDate1(a){
    if(getElementsByClassName("date-end")[a].value == ""){
        document.getElementsByClassName("date-end")[a].style.borderColor = "red";
        document.getElementsByClassName("saxeli")[a].style.color = "red";
        return false;
    }else{
        document.getElementsByClassName("date-end")[a].style.borderColor = "green";
        document.getElementsByClassName("saxeli")[a].style.color = "black";
        return true;
    }
}

function EraseAll(){
    localStorage.clear();
    location.href="index.html";
}