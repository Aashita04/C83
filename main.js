canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var last_position_of_x,last_position_of_y;
var color="blue";
var width_of_line=3;

var width= screen.width;
var new_width= screen.width-70; 
var new_height= screen.height-300;

if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touch_start);
function my_touch_start(e){
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    var current_position_of_touch_x= e.touches[0].clientX-canvas.offsetLeft;
    var current_position_of_touch_y= e.touches[0].clientY-canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y are =");
        console.log(" x=  " + last_position_of_x + " y=  " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("Current position of x and y are =");
        console.log(" x=  " + current_position_of_touch_x + " y=  " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
        ctx.stroke();
    
    
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;

}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}