document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    screen.orientation.lock('portrait');       
}

function myFunc(){
     myFunc = function(){}; // kill it as soon as it was called
     screen.orientation.lock('portrait'); 
};

function sysalarm(weather,water,alarm) {

cordova.plugins.notification.local.schedule({
    id : 69,
    title: 'Status Update',
    text: 'Weather: '+weather+', Water:'+water+' ,Alarm:'+alarm,
    foreground: true
});

}

function upsysalarm(weather,water,alarm) {

cordova.plugins.notification.local.schedule({
    id : 69,
    title: 'Status Update',
    text: 'Weather: '+weather+', Water:'+water+' ,Level:'+alarm,
    foreground: true
});

}

window.onload=function(){

document.getElementById("profile-tab").addEventListener("click", myFunc());




}