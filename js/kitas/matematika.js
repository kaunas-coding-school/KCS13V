function sudeti() {

    function gautiSkaicius() {
        var a = Number(document.getElementById('a').value);
        var b = parseInt(document.getElementById('b').value);
        return {a, b};
    }

    var {a, b} = gautiSkaicius();

    rez = sudetis(a,b);
    document.getElementById('sudetiesRezultatas').innerHTML = rez;
}