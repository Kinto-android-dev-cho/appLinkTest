/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    setTimeout(function(){
        var userAgent = navigator.userAgent; 
        var visitTime = (new Date()).getTime(); 
        if (userAgent.match(/Android/i)) { //Android
            location.href = 'http://play.google.com/store/apps/details?id=jp.co.toyota.myroute'
        } else if (userAgent.match(/iPhone/i)) { //iOs
         setTimeout(function() { 
             if ((new Date()).getTime() - visitTime < 3000) { 
                 location.href = "https://myroute.onelink.me/reBz/hrm4p32z"; 
                 }
             } ,2500);
              setTimeout(function() { 
                  location.href = "https://"; 
                  } ,0); 
        } else { //Window PC
            location.href = 'http://play.google.com/store/apps/details?id=jp.co.toyota.myroute'
        } 

    }, 2000);

});
