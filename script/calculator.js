document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const value = button.value;
            
            if (value === 'c') {
                result.value = '';
            } else if (value === '=') {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = 'Error';
                }
            } else {
                result.value += value;
            }
        });
    });
});