function checklength(){
	var elMsg = document.getElementById('msgBox');
	
	if(this.value.length < 8){
		elMsg.textContent='Username must be between 8 and 24 characters';	
	}else{
		elMsg.textContent='';		
	}
}
function checklength2(){
	var elMsg = document.getElementById('msgBox');
	
	if(this.value.length < 8){
		elMsg.textContent=' Password must be between 8 and 24 characters';	
	}else{
		elMsg.textContent='';		
	}
}
var elPassword =document.getElementById('pswid');
var elUsername =document.getElementById('nameid')
elPassword.onblur =checklength;
elUsername.onblur=checklength2;

var btn1 = document.querySelector('#button1');

btn1.addEventListener('click',function(){
	if(elPassword.value.length>=8 && elUsername.value.length>=8){ 
		setTimeout(function(){
			
			document.getElementById("left").style.display='none';
			document.getElementById("left2").style.display='block';

		},2000);
	}
})
var btn2 = document.querySelector('#button2');

btn2.addEventListener('click',function(){
	setTimeout(function(){
		document.getElementById("left2").style.display='none';
		document.getElementById("left").style.display='block';
	},1000);
	location.reload();
})
/*function Redirect(){
	if(elPassword.value.length>=8 && elUsername.value.length>=8){ 
		setTimeout(function(){
			
			document.getElementById("left").style.display='none';
			document.getElementById("left2").style.display='block';

		},2000);
	}
}*/

/*function Redirect2(){
	setTimeout(function(){
		document.getElementById("left2").style.display='none';
		document.getElementById("left").style.display='block';
	},1000);
	location.reload();
}*/

/*$(function(){
	$('#submitid').click(function(){
		$(this).html('<img src="img/logo-google.svg"/>');
		return false;
	})
})*/