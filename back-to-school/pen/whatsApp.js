function sendToWhatsapp(){
	let number = "+201281990993";
    let cartContent = document.querySelector(".cartContainer");
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
	var url = "https://wa.me/" + number + "?text="
    // +"order: " ${cartContent};
	
	
    // console.log(cartContent);
	
	+ "Name : " +name+ "%0a"
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}

