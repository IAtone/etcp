// var oPark = document.getElementById('park');

var submit = document.getElementById('submit');
submit.addEventListener('click',getForm,false);


function getForm(){
    var province = document.getElementById('province');
    var city = document.getElementById('city');
    var parkname = document.getElementById('parkName').value;
    var num = document.getElementById('parkNumber').value;
    var contact = document.getElementById('user').value;
    var phone = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

    var oXhr = new XMLHttpRequest();
    var parmas = "parkname="+parkname+"&phone="+phone;
    console.log(parmas);
    oXhr.open('get','js/insert.php?'+parmas,true);

    oXhr.onreadystatechange=function(){
        if(this.status == 200 && this.readyState == 4){
           // console.log(this.responseText);
          if (this.responseText == 1) {
             alert('车场注册成功!');
          } else {
              alert('车场注册失败!');
          }
       }
   }
   oXhr.send();
}
