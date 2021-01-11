const result =  document.querySelector('.result');

/**
 * Called on every button click.
 * Currently just displays the value of the button in the result
 * @param value 
 */
function onButtonClick(value) {
    if (!!result) {
        result.innerHTML = value;
    }
}