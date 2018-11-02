let Tocancel=document.getElementsByClassName('Cbutton');
for(let button of Tocancel) {
button.onclick=()=>{
	let start = button.parentNode.parentNode;
	let status = start.children[4].innerHTML;
	if (status === "<b>Not Delivered</b>"){
		let end=start.parentNode;
		end.removeChild(start);
	}else{
		alert("Nop!, You can't cancel this. It's Delivered or In Transit")
	};
};
};