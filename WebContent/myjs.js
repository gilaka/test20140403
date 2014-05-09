function alertname(){
	var name;
	name= prompt("输入姓名","姓名");
	alert("你的名字："+name);
}

function body_click(){
	alert(event.x + "  " + event.y);
}

function $(str){
	return(document.getElementById(str));
}

function check_submit(){
	if($("username").value==""){alert("请输入用户名"); return(false);}
	if($("pass").value==""){alert("请输入密码"); return(false);}
	if($("passconfirm").value==""){alert("请确认密码"); return(false);}
	if($("pass").value!=$("passconfirm").value){alert("两次输入的密码不一致"); return(false);}
	if($("identinput").value!=$("identcode").value) alert("验证码输入错误");
	$("submit_button").disabled=true;
	return(false);
}

function mover(){
	event.srcElement.focus();
	event.srcElement.select(); 
}

function getIdentCode(){
	var random = Math.random().toFixed(4);
	var identCode = random.toString().substr(2);
	$("identcode").innerText=identCode;
}

function refresh_div(){
	var div_width=240;
	var div_height=160;
	$("mydiv").style.position="absolute";
	$("mydiv").style.left=(document.body.offsetWidth-div_width)/2;
	$("mydiv").style.top=(document.body.offsetHeight-div_height)/2;
}

function showJSON(){   
    var user =   
     {   
		"username":"andy",   
		"age":20,   
		"info": {"tel":"123456","cellphone":"98765"},   
		"address":   
			[   
				{"city":"beijing","postcode":"222333"},   
				{"city":"newyork","postcode":"555666"}   
			]   
		};   
       
     alert(user.username);   
     alert(user.age);   
     alert(user.info.cellphone);   
     alert(user.address[0].city);   
     alert(user.address[0].postcode);   
}

function add_to_select(){
	var op = new Option();
	op.innerHTML = (new Date()).toLocaleString();
	select1.appendChild(op);
}

function delete_select(){
	if(select1.options.length<1) return;
	var op = select1.options[select1.selectedIndex];
	select1.removeChild(op);
}   