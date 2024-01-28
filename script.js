function buttonclick(val) {
    var screen = document.getElementById("screen");

    switch (val) {
        case 'AC':
            screen.value = '';
            break;
        case 'DEL':
            screen.value = screen.value.slice(0, -1);
            break;
        case '=':
            try {
                screen.value = eval(screen.value);
            } catch (error) {
                screen.value = 'Error';
            }
            break;
        default:
            screen.value += val;
    }
    event.preventDefault();
}
