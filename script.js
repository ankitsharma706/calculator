
let input = document.querySelector('input[type="text"]');

let buttons = document.querySelectorAll('button');

let expression = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the clicked button's inner text
        let buttonText = e.target.innerText;

        switch (buttonText) {
            case '=':
                try {
                    let result = eval(expression);
                    input.value = result;
                    expression = result.toString(); 
                } catch (error) {
                    input.value = 'Error';
                }
                break;
            case 'AC':
                
                expression = "";
                input.value = "";
                break;
            case 'DEL':
                
                expression = expression.slice(0, -1);
                input.value = expression;
                break;
            default:
                
                expression += buttonText;
                input.value = expression;
                break;
        }
    });
});
