/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    
    
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const deepLinkItems = [].slice.call(
        document.querySelectorAll('.deeplink')
    );

    deepLinkItems.map(function (deepLinkItem) {
        deepLinkItem.addEventListener('click', () => {
            var userAgent = navigator.userAgent; 
            var visitTime = (new Date()).getTime(); 
            if (userAgent.match(/Android/i)) { //Android
            location.href = 'intent://kinto-android-dev-cho.github.io/appLinkTest/memo/https://yahoo.co.jp#intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=renewal.myroute.app.android.dev;end;'; 
            } else if (userAgent.match(/iPhone/i)) { //iOs
             setTimeout(function() { 
                 if ((new Date()).getTime() - visitTime < 3000) { 
                     location.href = "https://myroute.onelink.me/reBz/hrm4p32z"; 
                     }
                 } ,2500);
                  setTimeout(function() { 
                      location.href = "https://"; 
                      } ,0); 
                }
        }
        )
    })

});
