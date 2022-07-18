const counter = 0;
const counter = document.getElementById('counter')

function increment() {
    counter = counter + 1;
    counter.innerHTML = counter;
}

function reset() {
    counter = 0;
    counter.innerHTML = counter;
}
function decrement() {
    counter = counter - 1;
    counter.innerHTML = counter;
}