var input = document.getElementById('inputbox');

function display(number){
    input.value+= number;
}
function calculate(){
    var final_num = input.value;
    var final_result= eval(final_num);
    input.value=final_result
}
function clearall(){
    input.value="";
}
function delval(){
    input.value=input.value.slice(0,-1)
}
