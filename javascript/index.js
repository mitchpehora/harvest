$(document).ready(function() {

  $('footer').mouseenter(function() {
      $("footer").css('background-color','rgba(235, 167, 49, 0.75)');
  });


  $('footer').mouseleave(function() {
      $('footer').css('background-color','rgba(235, 167, 49, 0.5)');
  });

});

var deviceIphone = "iphone";
var deviceIpod = "ipod";

//Initialize our user agent string to lower case.
var uagent = navigator.userAgent.toLowerCase();
// Detects if the current device is an iPhone.
function DetectIphone()
{
   if (uagent.search(deviceIphone) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPod Touch.
function DetectIpod()
{
   if (uagent.search(deviceIpod) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPhone or iPod Touch.
function DetectIphoneOrIpod()
{
    if (DetectIphone())
       return true;
    /*   window.location.replace("file:///Users/mitchmac/Documents/github/harvest/mobiletest.html"); */
    if (DetectIpod())
       return true;
      /* window.location.replace("file:///Users/mitchmac/Documents/github/harvest/mobiletest.html");*/
    else
       return false;
}

if (DetectIphoneOrIpod() ==true )
{
  window.location.replace("https://mitchpehora.github.io/harvest/mobile.html");
}
