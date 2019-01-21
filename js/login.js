// login.js

function showMessage() {
	var message = document.getElementById('message');
	message.style.visibility = '';

}

function getCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length+1 
			c_end=document.cookie.indexOf(";",c_start)
			if (c_end==-1) c_end=document.cookie.length
				return unescape(document.cookie.substring(c_start,c_end))
		} 
	}
	return ""
}

function checkCookie()
{
	console.log('123');
	var username=getCookie('think_userName')
	console.log(username);
	if (username!=null && username!="")
		{alert('Welcome again '+username+'!')}
	console.log(username)
}

function checkMessage() {
	console.log('123');
	var loginMessage=getCookie('think_Message');
	if (loginMessage!=null && loginMessage!="")
	{
		document.getElementById('message').style.visibility = '';
	}
	else {
		document.getElementById('message').style.visibility = 'hidden';
	}
}

window.onload=checkMessage(); 