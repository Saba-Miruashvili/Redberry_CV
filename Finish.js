
document.getElementById("display_image").style.backgroundImage=localStorage.getItem("Image")
document.getElementById("NumberOut").innerHTML = localStorage.getItem("phone")
document.getElementById("nameOut").innerHTML = localStorage.getItem("Name") + " " + localStorage.getItem("Surname")
document.getElementById("emailOut").innerHTML = localStorage.getItem("email")
document.getElementById("l77013Out").innerHTML = localStorage.getItem("AboutMe")

Name = localStorage.getItem("Name")
Surname = localStorage.getItem("Surname")
email = localStorage.getItem("email")
AboutMe = localStorage.getItem("AboutMe")
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


position = JSON.parse(localStorage.getItem("Eposition"));
employer = JSON.parse(localStorage.getItem("Eemployer"));
dateStart = JSON.parse(localStorage.getItem("EdateStart"));
dateEnd = JSON.parse(localStorage.getItem("EdateEnd"));
description = JSON.parse(localStorage.getItem("EDescription"));
console.log(SEposition)

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


experiences=[];
educations=[];


for(let i=0;i<position.length;i++){
    let send={
        "position": position[i],
        "employer": employer[i],
        "start_date": dateStart[i],
        "due_date": dateEnd[i],
        "description": description[i]
    }
    experiences.push(send);
}


let Jotaroo = 0;
DEEEIOOOOOOOOO=["საშუალო სკოლის დიპლომი","ზოგადსაგანმანათლებლო დიპლომი","ბაკალავრი","მაგისტრი","დოქტორი","ასოცირებული ხარისხი","სტუდენტი",'კოლეჯი(ხარისიხს გარეშე)','სხვა'];
degree_id=[];

for(let i=0;i<ESDegree.length;i++){
    while(ESDegree[Jotaroo]!=DEEEIOOOOOOOOO[Jotaroo]){
        Jotaroo++;
    }
    degree_id[i]=Jotaroo;
    Jotaroo=0;
}

Date_end=JSON.parse(localStorage.getItem('DueT'))
Description=JSON.parse(localStorage.getItem('DescrT'))


for(let i=0;i<ESlearnIn.length;i++){
    let send={
        "institute": ESlearnIn[i],
        "degree_id": degree_id[i],
        "due_date": ESdegdate[i],
        "description": ESinfo[i]
    }
    educations.push(send);
}
image=String(localStorage.getItem('Image'));







for(let i = 0; i < ESlearnIn.length; i++){
    ElearnIn[i] = ESlearnIn[i];
    EDegree[i] = ESDegree[i];
    Edegdate[i] = ESdegdate[i];
    Einfo[i] = ESinfo[i];
        if(i > 0){
            
            document.getElementsByClassName("PDD_under")[0].innerHTML+= `
            <div class="Satauri">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
            <div class="Degree_Out"></div>
            <div class="date-finish-Out"></div>
            <div class="info_Out"></div>
            `
        }
        document.getElementsByClassName('Degree_Out')[i].innerHTML = ESlearnIn[i] + " " + ESDegree[i];
        document.getElementsByClassName('date-finish-Out')[i].innerHTML = ESdegdate[i];
        document.getElementsByClassName('info_Out')[i].innerHTML = ESinfo[i];
}
x = localStorage.getItem("phone")
phone = x.replace(/\s/g, '');



DIOOO = "  "



send={
    "name": Name,
    "surname": Surname,
    "email": email,
    "phone_number": phone,
    "experiences": experiences,
    "educations": educations,
    "image": DIOOO,
    "about_me": AboutMe
  }




    axios.post(`https://resume.redberryinternship.ge/api/cvs`,send)
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    })



    function EraseAll(){
        localStorage.clear();
        location.href="index.html";
    }