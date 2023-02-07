function namefunction(){
    var x=document.getElementById("nameIn").value;
    document.getElementById("nameOut").innerHTML = x + " " + document.getElementById("surnameIn").value;
    // console.log(x);
    localStorage.setItem("Name",document.getElementById('nameIn').value);
}

function surnamefunction(){
    var x=document.getElementById("surnameIn").value;
    document.getElementById("nameOut").innerHTML = document.getElementById("nameIn").value + " " + x;
    // console.log(x);
    localStorage.setItem("Surname",document.getElementById('surnameIn').value);
}

function emailfunction(){
    var x=document.getElementById("EmailIn").value;
    document.getElementById("emailOut").innerHTML =  x;
    localStorage.setItem("email",document.getElementById('EmailIn').value);
    // console.log(x);
}

function phonefunction(){
    var x=document.getElementById("NumberIn").value;
    document.getElementById("NumberOut").innerHTML =  x;
    localStorage.setItem("phone",document.getElementById('NumberIn').value);
    // console.log(x);
}

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
      //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
      var mail = document.getElementById("EmailIn").value;
      
      if( regx.test(mail) === false ){
        //   alert('Youre an ivnalid');
        //   alert(mail)
          document.getElementById("EmailIn").style.borderColor = "red";
          document.getElementsByClassName("saxeli")[2].style.color = "red";
        //   console.log(document.getElementsByClassName("saxeli"))
          return false;
          // document.querySelector('#button2').disabled = true;
       }
       else{
        // document.querySelector("#button2").onclick = function () {
        location.href = "Welcome.html";
        
       }
      
      }

      function ValidatePhone()
      {
      
      var regx =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
      var phone = document.getElementById("NumberIn").value;
      
      if( regx.test(phone) === false ){
          alert('You are an ivnalid');
          return false;
       }else{location.href = "Welcome.html";}
    }
    
    function ValidateName()
      {
      
      var regx = /[ა-ჰ]/;
      var Name = document.getElementById("nameIn").value;
      
      if( regx.test(Name) === false ||  Name.length<2){
          alert('Youre an ivnalid');
          return false;
       }else{
        location.href = "Welcome.html";
       }
    }

    function ValidateSurName()
      {
      
      var regx = /[ა-ჰ]/;
      var surname = document.getElementById("surnameIn").value;
      
      if( regx.test(surname) === false ||  surname.length<2){
          alert('Youre an ivnalid');
          return false;
       }else{
        location.href = "Welcome.html";
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
