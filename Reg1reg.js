// function namefunction(){
//     var x=document.getElementById("nameIn").value;
//     document.getElementById("nameOut").innerHTML = x + " " + document.getElementById("surnameIn").value;
//     // console.log(x);
//     localStorage.setItem("Name",document.getElementById('nameIn').value);
//     var regx = /[ა-ჰ]/;
//     var Name = document.getElementById("nameIn").value;
    
//     if( regx.test(Name) === false ||  Name.length<2){
//         // alert('Youre an ivnalid');
//         document.getElementById("nameIn").style.borderColor = "red";
//         document.getElementsByClassName("saxeli")[0].style.color = "red";

//         return false;
//      }else{
//         document.getElementById("nameIn").style.borderColor = "green";
//         document.getElementsByClassName("saxeli")[0].style.color = "black";
//      }
       
// }

// function surnamefunction(){
//     var x=document.getElementById("surnameIn").value;
//     document.getElementById("nameOut").innerHTML = document.getElementById("nameIn").value + " " + x;
//     // console.log(x);
//     localStorage.setItem("Surname",document.getElementById('surnameIn').value);

//     var regx = /[ა-ჰ]/;
//     var Name = document.getElementById("surnameIn").value;
    
//     if( regx.test(Name) === false ||  Name.length<2){
//         // alert('Youre an ivnalid');
//         document.getElementById("surnameIn").style.borderColor = "red";
//         document.getElementsByClassName("saxeli")[1].style.color = "red";

//         return false;
//      }else{
//         document.getElementById("surnameIn").style.borderColor = "green";
//         document.getElementsByClassName("saxeli")[1].style.color = "black";
//      }
// }

// function emailfunction(){
//     var x=document.getElementById("EmailIn").value;
//     document.getElementById("emailOut").innerHTML =  x;
//     localStorage.setItem("email",document.getElementById('EmailIn').value);
//     // console.log(x);
//     var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
//     var mail = document.getElementById("EmailIn").value;
    
//     if(mail == ""){
//       document.getElementById("dog").style.visibility = "hidden";
//     }else{
//       document.getElementById("dog").style.visibility = "visible";
//     }

//     if( regx.test(mail) === false ){
//       //   alert('Youre an ivnalid');
//       //   alert(mail)
//         document.getElementById("EmailIn").style.borderColor = "red";
//         document.getElementsByClassName("saxeli")[2].style.color = "red";
//       //   console.log(document.getElementsByClassName("saxeli"))
//         return false;
//         // document.querySelector('#button2').disabled = true;
//      }
//      else{
//         document.getElementById("EmailIn").style.borderColor = "green";
//         document.getElementsByClassName("saxeli")[2].style.color = "black";
//      }
// }

// function phonefunction(){
//     var x=document.getElementById("NumberIn").value;
//     document.getElementById("NumberOut").innerHTML =  x;
//     localStorage.setItem("phone",document.getElementById('NumberIn').value);
//     // console.log(x);
//     var regx =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
//     var phone = document.getElementById("NumberIn").value;

//     if(phone == ""){
//       document.getElementById("phone").style.visibility = "hidden";
//     }else{
//       document.getElementById("phone").style.visibility = "visible";
//     }
    
//     if( regx.test(phone) === false ){
//         // alert('You are an ivnalid');
//         document.getElementById("NumberIn").style.borderColor = "red";
//         document.getElementsByClassName("saxeli")[3].style.color = "red";
//         return false;
//      }else{document.getElementById("NumberIn").style.borderColor = "green";
//         document.getElementsByClassName("saxeli")[3].style.color = "black";}
// }

function aboutfunction(){
    var x=document.getElementById("l77013").value;
    document.getElementById("l77013Out").innerHTML =  x;
    localStorage.setItem("AboutMe",document.getElementById('l77013').value);
    // console.log(x);
}



    const image_input = document.getElementById('image_input');
    var uploaded_image = "";

    image_input.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", () =>{
            uploaded_image = reader.result;
            document.getElementById("display_image").style.backgroundImage = `URL(${uploaded_image})`;
            localStorage.setItem('Image', `URL(${uploaded_image})`)
        });
        reader.readAsDataURL(this.files[0]);
    })

    function localStore(){
        localStorage.setItem("Name",document.getElementById('nameIn').value);
        localStorage.setItem("Surname",document.getElementById('surnameIn').value);
    }




    // function ValidateEmail()
    //   {
      
    //   var regx = ;
    //   var phone = document.getElementById("").value;
      
    //   if( regx.test(mail) === false ){
    //       alert('Youre an ivnalid');
    //       return false;
    //    }
    // }
    function ValidateEmail()
      {
        var x=document.getElementById("EmailIn").value;
        document.getElementById("emailOut").innerHTML =  x;
        localStorage.setItem("email",document.getElementById('EmailIn').value);
      //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
      var mail = document.getElementById("EmailIn").value;

      if(mail == ""){
            document.getElementById("dog").style.visibility = "hidden";
          }else{
            document.getElementById("dog").style.visibility = "visible";
          }

      
      if( regx.test(mail) === false ){
        //   alert('Youre an ivnalid');
        //   alert(mail)
          document.getElementById("EmailIn").style.borderColor = "red";
          document.getElementsByClassName("saxeli")[2].style.color = "red";
          document.getElementsByClassName("stop")[2].style.visibility = "visible";
        //   console.log(document.getElementsByClassName("saxeli"))
          return false;
          // document.querySelector('#button2').disabled = true;
       }
       else{
        document.getElementsByClassName("stop")[2].style.visibility = "hidden";
        document.getElementById("EmailIn").style.borderColor = "green";
        document.getElementsByClassName("saxeli")[2].style.color = "black";
        return true
        
       }
     
      
      }

      function ValidatePhone()
      {
      var x=document.getElementById("NumberIn").value;
      document.getElementById("NumberOut").innerHTML =  x;
      localStorage.setItem("phone",document.getElementById('NumberIn').value);
      
      var regx =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
      var phone = document.getElementById("NumberIn").value;
      
      if(phone == ""){
        document.getElementById("phone").style.visibility = "hidden";
      }else{
        document.getElementById("phone").style.visibility = "visible";
      }
      
      if( regx.test(phone) === false ){
        //   alert('You are an ivnalid');
        document.getElementById("NumberIn").style.borderColor = "red";
        document.getElementsByClassName("saxeli")[3].style.color = "red";
        document.getElementsByClassName("stop")[3].style.visibility = "visible";
          return false;
       }else{
        document.getElementsByClassName("stop")[3].style.visibility = "hidden";
        document.getElementById("NumberIn").style.borderColor = "green";
        document.getElementsByClassName("saxeli")[3].style.color = "black";
        return true
        }
    }
    function ValidPhoneSpace(){
      var phone = document.getElementById("NumberIn");
      if(phone.value.length==4||phone.value.length==8||phone.value.length==11||phone.value.length==14){document.getElementById("NumberIn").value+=" ";}
  }
    
    function ValidateName()
    {
        
      var x=document.getElementById("nameIn").value;
      document.getElementById("nameOut").innerHTML = x + " " + document.getElementById("surnameIn").value;
      // console.log(x);
      localStorage.setItem("Name",document.getElementById('nameIn').value);
      var regx = /[^ა-ჰ]/;
      var Name = document.getElementById("nameIn").value;
      
      if( regx.test(Name) === true ||  Name.length<2){
        //   alert('Youre an ivnalid');
        document.getElementById("nameIn").style.borderColor = "red";
        document.getElementsByClassName("saxeli")[0].style.color = "red";
        document.getElementsByClassName("stop")[0].style.visibility = "visible"
        // console.log("WRYYYYYYYYYYYYY");
        
          return false;
       }else{
        document.getElementsByClassName("stop")[0].style.visibility = "hidden";
        document.getElementById("nameIn").style.borderColor = "green";
        document.getElementsByClassName("saxeli")[0].style.color = "black";
        return true
       }

      
    }
    function ValidateName2(){
      var Name = document.getElementById("nameIn").value;
      if(Name == ""){
        document.getElementById("email-Out").style.visibility = "hidden";
      }else{
        document.getElementById("email-Out").style.visibility = "visible";
      }
      
    }


    function ValidateSurName()
      {
      var x=document.getElementById("surnameIn").value;
      document.getElementById("nameOut").innerHTML = document.getElementById("nameIn").value + " " + x;
      // console.log(x);
      localStorage.setItem("Surname",document.getElementById('surnameIn').value);
      
      var regx = /[^ა-ჰ]/;
      var surname = document.getElementById("surnameIn").value;
      
      if( regx.test(surname) === true ||  surname.length<2){
        //   alert('Youre an ivnalid');
        document.getElementById("surnameIn").style.borderColor = "red";
        document.getElementsByClassName("saxeli")[1].style.color = "red";
        document.getElementsByClassName("stop")[1].style.visibility = "visible";
        
          return false;
       }else{
        document.getElementsByClassName("stop")[1].style.visibility = "hidden";
        document.getElementById("surnameIn").style.borderColor = "green";
        document.getElementsByClassName("saxeli")[1].style.color = "black";
        return true
       }


    }

    function Validatephoto(){
      if(localStorage.getItem("Image") == ""){
       return false;
      }else{
       return true;
      }
    } 



document.getElementById("display_image").style.backgroundImage=localStorage.getItem("Image")

document.getElementById("nameIn").value = localStorage.getItem("Name")
document.getElementById("nameOut").innerHTML = localStorage.getItem("Name") + " " + localStorage.getItem("Surname")
document.getElementById("surnameIn").value = localStorage.getItem("Surname")
// document.getElementById("phone").value = localStorage.getItem("")


document.getElementById("NumberIn").value = localStorage.getItem("phone")
document.getElementById("NumberOut").innerHTML = localStorage.getItem("phone")
document.getElementById("EmailIn").value = localStorage.getItem("email")
document.getElementById("emailOut").innerHTML = localStorage.getItem("email")

document.getElementById("l77013").value = localStorage.getItem("AboutMe")
document.getElementById("l77013Out").innerHTML = localStorage.getItem("AboutMe")

// localStorage.setItem("Name",document.getElementById('nameIn').value);


  function Validate(){
    if(
      ValidateName() == true &&
      ValidateSurName() == true &&
      ValidatePhone() == true &&
      ValidateEmail() == true &&
      Validatephoto() == true){
        location.href = "Reg2.html";
      }
    }


    function EraseAll(){
      localStorage.clear();
      location.href="index.html";
  }