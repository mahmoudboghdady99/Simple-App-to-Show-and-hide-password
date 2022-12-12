

// set variables
var box = document.querySelector("#box");
var btn = document.querySelector("#btn");

//logic

//event 
btn.addEventListener('click', togglePassward);


//function
function togglePassward()
{
    if(btn.getAttribute('data-text') == "show")
    {
        box.setAttribute('type', 'text');
        this.setAttribute('data-text', 'hide');
        this.innerHTML = "hide";
    }else {
        box.setAttribute('type', 'password');
        this.setAttribute('data-text', 'show');
        this.innerHTML = "show";
    }
}













