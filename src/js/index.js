document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
}


window.onload=function(){

navigator.geolocation.getCurrentPosition(
        function(position) {
            alert(position.coords.latitude + ',' + position.coords.longitude);
        },
        function() {
            alert('Error getting location');
        });

}
