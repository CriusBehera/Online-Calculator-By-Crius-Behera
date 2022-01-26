button_2 = document.querySelectorAll(".button_2");

for(item of button_2) {
    item.addEventListener("click",(e)=>{
        button_text = e.target.innerText;
        console.log(button_text);

        document.getElementById("input_calculator").value += button_text;
    })
}

function calculate_button() {
    var input = document.getElementById("input_calculator").value;

    input_1 = eval(input)
    
    document.getElementById("input_calculator").value = input_1 ;
}

function clear_button() {

    var null_var = "";

    document.getElementById("input_calculator").value =  null_var;
}
