const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
//accessing buttons
buttons.forEach(function(button) {
    // console.log(button);
    //creating a event listener
    // button.addEventListener('click', function(e){});
    button.addEventListener('mouseover', function(e) { // we can use click in place of mouseover
        console.log(e);
        console.log(e.target);
        //targeting each buttons
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }

    });
});