function showMessage() {
	document.getElementById('dimmer').style.display = "flex";
	setTimeout(hideMessage, 5000);
}

function hideMessage() {
	document.getElementById('dimmer').style.display = "none";
}