    function Validate()
      {
      //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
      var mail = document.getElementById("EmailIn").value;
      
      if( regx.test(mail) === false ){
        //    document.getElementById("EmailIn").style.borderColor = "red";
        //    document.getElementsByClassName("saxeli")[2].style.color = "red";
        //   alert('Youre an ivnalid without email');
        //   return false;
          
          // document.querySelector('#button2').disabled = true;
          
       }
       else{
        var regx =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
        var phone = document.getElementById("NumberIn").value;
        if( regx.test(phone) === false ){
            // document.getElementById("NumberIn").style.borderColor = "red";
            // document.getElementsByClassName("saxeli")[3].style.color = "red";
            // alert('You are an ivnalid without number');
            // return false;
         }else{
             
             var regx = /[ა-ჰ]/;
             var Name = document.getElementById("nameIn").value;
      
            if( regx.test(Name) === false ||  Name.length<2){
            // alert('Youre an ivnalid without name');
            // return false;
         }else{
            var regx = /[ა-ჰ]/;
            var surname = document.getElementById("surnameIn").value;
            
            if( regx.test(surname) === false ||  surname.length<2){
                // alert('Youre an ivnalid without life');
                // return false;
            }else{
                location.href = "Reg2.html";
       }
         }
       }
      
      }
    }
    //   function ValidatePhone()
    //   {
      
    //   var regx =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
    //   var phone = document.getElementById("NumberIn").value;
      
    //   if( regx.test(phone) === false ){
    //       alert('You are an ivnalid');
    //       return false;
    //    }else{location.href = "Welcome.html";}
    // }
    
    // function ValidateName()
    //   {
      
    //   var regx = /[ა-ჰ]/;
    //   var Name = document.getElementById("nameIn").value;
      
    //   if( regx.test(Name) === false ||  Name.length<2){
    //       alert('Youre an ivnalid');
    //       return false;
    //    }else{
    //     location.href = "Welcome.html";
    //    }
    // }

    // function ValidateSurName()
    //   {
      
    //   var regx = /[ა-ჰ]/;
    //   var surname = document.getElementById("surnameIn").value;
      
    //   if( regx.test(surname) === false ||  surname.length<2){
    //       alert('Youre an ivnalid');
    //       return false;
    //    }else{
    //     location.href = "Welcome.html";
    //    }
    // }