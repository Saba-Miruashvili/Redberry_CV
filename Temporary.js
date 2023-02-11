function Validate()
{

  var regxex = /[ა-ჰ]/;
  var Name = document.getElementById("nameIn").value;
  
  if( regxex.test(Name) === false ||  Name.length<2){
    //   alert('Youre an ivnalid');
    document.getElementById("nameIn").style.borderColor = "red";
    document.getElementsByClassName("saxeli")[0].style.color = "red";
      return false;}
 

  
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
  
  

 
  var regxe =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
  var phone = document.getElementById("NumberIn").value;
  
  if( regxe.test(phone) === false ){
    //   alert('You are an ivnalid');
    document.getElementById("NumberIn").style.borderColor = "red";
    document.getElementsByClassName("saxeli")[3].style.color = "red";
      return false;
   }


  var regxexe = /[ა-ჰ]/;
  var surname = document.getElementById("surnameIn").value;
  
  if( regxexe.test(surname) === false ||  surname.length<2){
    //   alert('Youre an ivnalid');
    document.getElementById("surnameIn").style.borderColor = "red";
    document.getElementsByClassName("saxeli")[0].style.color = "red";
      return false;
   }else{location.href = "Reg2.html";}
   
   


}