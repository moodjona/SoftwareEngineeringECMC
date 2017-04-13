function login()
{
	if (document.getElementById("text1").value == "Admin" && document.getElementById("text2").value == "test")
	{
		alert( "validation succeeded" );
		location.href="AdminDashboard.html";
	}
	
	else if(document.getElementById("text1").value == "Resident" && document.getElementById("text2").value == "test")
	{
		alert( "validation succeeded" );
		location.href="ResidentDashboard.html";
	}
	
	else
	{
		alert( "validation failed" );
		location.href="index.html";
	}
}
