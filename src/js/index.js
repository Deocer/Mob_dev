document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    screen.orientation.lock('portrait');       
}

function myFunc(){
     myFunc = function(){}; // kill it as soon as it was called
     console.log("once");
     screen.orientation.unlock();
     screen.orientation.lock('landscape');
     screen.orientation.unlock();
     screen.orientation.lock('portrait'); 
};

function sysalarm(weather,water,alarm) {

cordova.plugins.notification.local.schedule({
    id : 69,
    title: 'Status Update',
    text: 'Weather: '+weather+', Water Level:'+water+' ,Alarm Level:'+alarm,
    foreground: true
});

}

function upsysalarm(weather,water,alarm) {

cordova.plugins.notification.local.schedule({
    id : 69,
    title: 'Status Update',
    text: 'Weather: '+weather+', Water Level:'+water+' ,Alarm Level:'+alarm,
    foreground: true
});

}

window.onload=function(){

document.getElementById("profile-tab").addEventListener("click", myFunc());




}