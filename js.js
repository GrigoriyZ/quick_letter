/*
****************************************************************************************************************
this script 



***************************************************************************************************************
*/
/*get array from json file*/
var mydata = JSON.parse(data);

/*create valuable*/
var i = 0;
var check_permiss = true; //
var div_img, div_right, div_wrong, div_buttons;
var $_right = 0;
var $_wrong = 0;

/*create element <img> for insert into div id img*/
var image = document.createElement("img");
image.height = 400;
image.width = 400;
image.src = "";
    
/*create element for insert after finish*/  
var $_finish_1 = "<div><h1>Ваш результат !!!</h1><p> Правильно - ";
var $_finish_2 = "<br> Неправильно - ";
var $_finish_3 = "</p></div>";

/*create element for insert after buttons */ 
var $_table = document.createElement('table');
$_table.innerHTML = "<tr><td>Верно</td><td>Неверно</td></tr><tr><td><div id = 'right'></div></td><td><div id = 'wrong'></div></td></tr>";
  

/*get elements html page*/
window.onload = function() {
  div_img = document.getElementById("img");
  div_buttons = document.getElementById("buttons");
	}
	
	/********************************************************************************************************
	button function
	
	function start  authorizes the action, and inserts the image into the screen
	function pause  prohibits action
	function stop  prohibits action and removes the picture in the screen
	***********************************************************************************************************/
	
function start(){
	div_img.appendChild(image);
    div_buttons.appendChild($_table);
	div_right = document.getElementById("right");
    div_wrong = document.getElementById("wrong");
	image.src = mydata[i].src;
	right_wrong()
	check_permiss = true;
}

function pause(){
	check_permiss = false;
}

function stop(){
	check_permiss = false;
	div_img.innerHTML = "";
	div_img.innerHTML = $_finish_1 + $_right +$_finish_2 + $_wrong +$_finish_3;
	i = 0;
	$_right = 0;
    $_wrong = 0;
	right_wrong()
}


/************************************************************************************************************
function keypress
************************************************************************************************************/

/*processing keystrokes*/
window.onkeypress = hand;
function hand(e){
	if (check_permiss){
	  if (e.keyCode ==mydata[i].keynumber){
		if (i == 25){
		  i = -1;
		}
		i++;	
		$_right++ ;
	  }
	  else{
		$_wrong++ ;
	  }
	  image.src = mydata[i].src
	  right_wrong()
	}
}

/******************************************************************************************************************************************
additional function
********************************************************************************************************************************************/

/*insert number right and wrong keydown*/
function right_wrong(){
  div_right.innerHTML = $_right;
  div_wrong.innerHTML = $_wrong;
  }


