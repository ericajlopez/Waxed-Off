function loadBG(){
    document.getElementById("mainBackgroundPicture").style.backgroundImage="url(../images/studio.jpg)";
    document.getElementById("paolasPicture").style.img="url(../images/profilePicStanding.jpg)";
}
window.onload=loadBG();

var alerted = localStorage.getItem('alerted') || '';
			if (alerted != 'yes') {
			 alert("Welcome to Waxed Off! \r\nPlease take the time to look over our policies before booking.\r\nThank you!");
			 localStorage.setItem('alerted','yes');
			}