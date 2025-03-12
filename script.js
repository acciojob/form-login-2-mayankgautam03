//your JS code here. If required.
function showalert () {
 let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let phoneNumber = document.getElementById("phoneNumber").value;
            let emailId = document.getElementById("emailId").value;
	let output= `First Name:${firstName} Last Name:${lastName} phone Number:${phoneNumber} Email ID:${emailId}`;

	alert(output);
}
