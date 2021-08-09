function insert(num) {
  document.getElementById("output-value").innerHTML+=num;
}
function clearOutput() {
  document.getElementById("output-value").innerHTML="";
}
function clearHistory() {
  document.getElementById("history-value").innerHTML="";
}
var operator=document.getElementById
function giveToHistory(id){
  document.getElementById("history-value").innerHTML="";
  document.getElementById("history-value").innerHTML+=document.getElementById("output-value").innerHTML;
  document.getElementById("history-value").innerHTML+=id;
  clearOutput();
}
function operate(){
  document.getElementById("history-value").innerHTML+=document.getElementById("output-value").innerHTML;
  clearOutput();
  var newHistory=document.getElementById("history-value").innerHTML;
  var res=eval(newHistory);
  document.getElementById("output-value").innerHTML+=res;
  clearHistory();
}

function takePercent() {
  var prevOutput=document.getElementById("output-value").innerHTML;
  var percent=parseInt(prevOutput);
  var res=percent/100;
  var resString=res.toString();
  clearOutput();
  clearHistory();
  document.getElementById("output-value").innerHTML+=resString;
  // console.log(resString);
}