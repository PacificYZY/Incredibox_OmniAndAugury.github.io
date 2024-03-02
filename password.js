var div_password = '0%';
document.documentElement.style.setProperty("--div_password_Y",div_password);
function myFunction() {
    if (document.getElementById("password").value == "123123") {
        alert("欢迎游玩😘");
        div_password = '100%';
	    document.documentElement.style.setProperty("--div_password_Y",div_password);
    }
    else {
        alert("密码错误");
    }
}
