// $(document).ready(function(){

var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var btn_tl = $("#btn_tl");
var btn_tm = $("#btn_tm");
var btn_tr = $("#btn_tr");
var btn_ml = $("#btn_ml");
var btn_mc = $("#btn_mc");
var btn_mr = $("#btn_mr");
var btn_bl = $("#btn_bl");
var btn_bm = $("#btn_bm");
var btn_br = $("#btn_br");

var playerName1 = "" ;
var playerName2 = "" ;

var cross = 0 ;
var circle = 0 ;



// line_skewed_left();
// line_skewed_right();
// line_vertical_left();
// line_vertical_middle();
// line_vertical_right();
// line_horizontal_top();
// line_horizontal_middle();
// line_horizontal_bottom();

function line_skewed_left()
{
context.beginPath();
context.lineWidth = '5';
context.lineCap = 'round';
context.moveTo(0, 0);
context.lineTo(600, 300);
context.stroke();
}

function line_skewed_right()
{
context.beginPath();
context.lineWidth = '5';
context.lineCap = 'round';
context.moveTo(0, 0);
context.lineTo(1200, 600);
context.stroke();
}

function line_vertical_left()
{
context.beginPath();
context.lineWidth = '5';
context.lineCap = 'round';
context.moveTo(55, 0);
context.lineTo(55, 600);
context.stroke();
}

function line_vertical_middle()
{
context.beginPath();
context.lineWidth = '5';
context.lineCap = 'round';
context.moveTo(147, 0);
context.lineTo(147, 600);
context.stroke();
}

function line_vertical_right()
{
context.beginPath();
context.lineWidth = '5';
context.lineCap = 'round';
context.moveTo(240, 0);
context.lineTo(240, 600);
context.stroke();
}

function line_horizontal_top()
{
context.beginPath();
context.lineWidth = '5';
context.lineCap = 'round';
context.moveTo(0, 28);
context.lineTo(600, 28);
context.stroke();
}

function line_horizontal_middle()
{
context.beginPath();
context.lineWidth = '5';
context.lineCap = 'round';
context.moveTo(0, 75);
context.lineTo(600, 75);
context.stroke();
}

function line_horizontal_bottom()
{
context.beginPath();
context.lineWidth = '5';
context.lineCap = 'round';
context.moveTo(0, 120);
context.lineTo(600, 120);
context.stroke();
}
// });