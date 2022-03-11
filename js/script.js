var menuBar=document.querySelector('#menuBar');
var navBar=document.querySelector('.nav_item');

menuBar.onclick=()=>{
   menuBar.classList.toggle('fa-times');
   navBar.classList.toggle('active');
}

$(".youtube-link").grtyoutube({
				autoPlay:true,
				theme: "dark"
			});
$(".youtube-link").grtyoutube({ autoPlay:false });