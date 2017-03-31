function login()
{
	if(   document.getElementById("text1").value == "test"
	   && document.getElementById("text2").value == "test" )
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
