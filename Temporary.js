function Validate()
{
      
      var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
      var mail = document.getElementById("EmailIn").value;
      
      if( regx.test(mail) === false ){
        //    document.getElementById("EmailIn").style.borderColor = "red";
        //    document.getElementsByClassName("saxeli")[2].style.color = "red";
        //   alert('Youre an ivnalid without email');
          
          
          document.querySelector('#button2').disabled = true;
          
       }
       
        var regx =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
        var phone = document.getElementById("NumberIn").value;
        if( regx.test(phone) === false ){
            // document.getElementById("NumberIn").style.borderColor = "red";
            // document.getElementsByClassName("saxeli")[3].style.color = "red";
            // alert('You are an ivnalid without number');
            
       }
       var regx = /[ა-ჰ]/;
             var Name = document.getElementById("nameIn").value;
      
            if( regx.test(Name) === false ||  Name.length<2){
            // alert('Youre an ivnalid without name');
            document.querySelector('#button2').disabled = true;
        }
}