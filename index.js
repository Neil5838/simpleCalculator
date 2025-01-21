const display = document.getElementById('display');
display.value = '0';

const keys = document.getElementsByClassName('key');
Array.from(keys).forEach(key => {
    key.addEventListener('click', function(e) {
        const keyValue = e.target.textContent;

        if(keyValue === 'AC') {
            display.value = '0';
            return;
        }

        if(keyValue === '=') {
            try {
                // replace all the X into real operator '*'
                display.value = display.value.replaceAll('x', '*');
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'error';
            }
            return;
        }

        if(keyValue === 'DE') {
            
            display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
            console.log(display.value.length);
            return;
        }

        //append input
        if(display.value === '0' && keyValue !== '.') {
            display.value = keyValue;
        } else {
            const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
            if(keyValue === '.' && lastNumber.includes('.')) {
                return;
            }
            display.value += keyValue;
        }
    });
});