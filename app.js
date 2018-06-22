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



line_skewed_left();
// line_skewed_right();



function line_skewed_left()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(0, 0);
context.lineTo(600, 300);
context.stroke();
}

function line_skewed_right()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(600, 0);
context.lineTo(0, 600);
context.stroke();
}

function line_vertical_left()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(112.5, 0);
context.lineTo(112.5, 600);
context.stroke();
}

function line_vertical_middle()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(300, 0);
context.lineTo(300, 600);
context.stroke();
}

function line_vertical_right()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(412.5, 0);
context.lineTo(412.5, 600);
context.stroke();
}

function line_horizontal_top()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(0, 112.5);
context.lineTo(600, 112.5);
context.stroke();
}

function line_horizontal_middle()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(0, 300);
context.lineTo(600, 300);
context.stroke();
}

function line_horizontal_bottom()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(0, 412.5);
context.lineTo(600, 412.5);
context.stroke();
}
// });