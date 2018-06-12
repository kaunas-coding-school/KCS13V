let x = 5;

function sudetis(a, b) {
    return a + b;
}

let atimtis = function (d, e) {
    return d - e;
};
let f = sudetis(2, 2);
let g = atimtis(x, 3);
console.log('F: ' + f);
console.log('G: ' + g);
let divas = document.getElementById('divas');
divas.innerHTML = "F: " + f + "\nG: " + g;